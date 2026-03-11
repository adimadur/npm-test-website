-- ============================================================================
-- Minai Pvt Ltd B2B HR Consulting Website - Database Schema
-- Public website with contact form submission tracking
-- NO AUTHENTICATION - No RLS policies needed
-- ============================================================================

-- ============================================================================
-- EXTENSIONS
-- ============================================================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ============================================================================
-- CUSTOM TYPES
-- ============================================================================

-- Contact submission status tracking
CREATE TYPE submission_status AS ENUM (
  'new',
  'contacted',
  'in_progress',
  'converted',
  'closed'
);

-- ============================================================================
-- TABLES
-- ============================================================================

-- Contact form submissions
CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  company_name text,
  company_size text,
  industry text,
  service_interest text,
  message text NOT NULL,
  status submission_status NOT NULL DEFAULT 'new',
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  
  CONSTRAINT contact_submissions_full_name_not_empty 
    CHECK (length(trim(full_name)) > 0),
  CONSTRAINT contact_submissions_email_not_empty 
    CHECK (length(trim(email)) > 0),
  CONSTRAINT contact_submissions_message_not_empty 
    CHECK (length(trim(message)) > 0),
  CONSTRAINT contact_submissions_email_format 
    CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- ============================================================================
-- INDEXES
-- ============================================================================

CREATE INDEX contact_submissions_email_idx ON public.contact_submissions(email);
CREATE INDEX contact_submissions_status_idx ON public.contact_submissions(status);
CREATE INDEX contact_submissions_created_at_idx ON public.contact_submissions(created_at DESC);
CREATE INDEX contact_submissions_company_idx ON public.contact_submissions(company_name);

-- Composite index for admin dashboard filtering
CREATE INDEX contact_submissions_status_created_idx 
  ON public.contact_submissions(status, created_at DESC);

-- Partial index for new submissions
CREATE INDEX contact_submissions_new_idx 
  ON public.contact_submissions(created_at DESC) 
  WHERE status = 'new';

-- ============================================================================
-- TRIGGER FUNCTIONS
-- ============================================================================

-- Update timestamp function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- ============================================================================
-- TRIGGERS
-- ============================================================================

CREATE TRIGGER update_contact_submissions_updated_at
  BEFORE UPDATE ON public.contact_submissions
  FOR EACH ROW 
  EXECUTE FUNCTION public.update_updated_at_column();

-- ============================================================================
-- ROW LEVEL SECURITY
-- ============================================================================

-- NO RLS - This is a public website with no authentication
-- Contact submissions are managed via Supabase dashboard (service role key)
-- Frontend can INSERT anonymously, backend admins manage via dashboard

-- Allow anonymous insertions from contact form
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "contact_submissions_anonymous_insert_policy" 
  ON public.contact_submissions
  FOR INSERT 
  WITH CHECK (true);

-- No SELECT/UPDATE/DELETE policies - managed via Supabase dashboard only

-- ============================================================================
-- RPC FUNCTIONS
-- ============================================================================

-- Function to submit contact form (with rate limiting considerations)
CREATE OR REPLACE FUNCTION public.submit_contact_form(
  p_full_name text,
  p_email text,
  p_phone text DEFAULT NULL,
  p_company_name text DEFAULT NULL,
  p_company_size text DEFAULT NULL,
  p_industry text DEFAULT NULL,
  p_service_interest text DEFAULT NULL,
  p_message text DEFAULT NULL
)
RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_submission_id uuid;
BEGIN
  -- Validation
  IF length(trim(p_full_name)) = 0 THEN
    RAISE EXCEPTION 'Full name is required';
  END IF;
  
  IF length(trim(p_email)) = 0 THEN
    RAISE EXCEPTION 'Email is required';
  END IF;
  
  IF p_email !~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' THEN
    RAISE EXCEPTION 'Invalid email format';
  END IF;
  
  IF length(trim(p_message)) = 0 THEN
    RAISE EXCEPTION 'Message is required';
  END IF;
  
  -- Insert submission
  INSERT INTO public.contact_submissions (
    full_name,
    email,
    phone,
    company_name,
    company_size,
    industry,
    service_interest,
    message,
    status
  )
  VALUES (
    trim(p_full_name),
    trim(lower(p_email)),
    trim(p_phone),
    trim(p_company_name),
    trim(p_company_size),
    trim(p_industry),
    trim(p_service_interest),
    trim(p_message),
    'new'::submission_status
  )
  RETURNING id INTO v_submission_id;
  
  RETURN v_submission_id;
END;
$$;

-- Grant execute to anonymous users for form submission
GRANT EXECUTE ON FUNCTION public.submit_contact_form TO anon;
GRANT EXECUTE ON FUNCTION public.submit_contact_form TO authenticated;

-- Function to get submission statistics (admin only - via service role)
CREATE OR REPLACE FUNCTION public.get_submission_stats()
RETURNS jsonb
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_result jsonb;
BEGIN
  SELECT jsonb_build_object(
    'total', COUNT(*),
    'new', COUNT(*) FILTER (WHERE status = 'new'),
    'contacted', COUNT(*) FILTER (WHERE status = 'contacted'),
    'in_progress', COUNT(*) FILTER (WHERE status = 'in_progress'),
    'converted', COUNT(*) FILTER (WHERE status = 'converted'),
    'closed', COUNT(*) FILTER (WHERE status = 'closed'),
    'today', COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE),
    'this_week', COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE - INTERVAL '7 days'),
    'this_month', COUNT(*) FILTER (WHERE created_at >= date_trunc('month', CURRENT_DATE))
  )
  INTO v_result
  FROM public.contact_submissions;
  
  RETURN v_result;
END;
$$;

-- Only service role can execute stats function
REVOKE EXECUTE ON FUNCTION public.get_submission_stats FROM anon;
REVOKE EXECUTE ON FUNCTION public.get_submission_stats FROM authenticated;

-- ============================================================================
-- COMMENTS
-- ============================================================================

COMMENT ON TABLE public.contact_submissions IS 'Stores consultation request submissions from the website contact form. Managed via Supabase dashboard.';
COMMENT ON COLUMN public.contact_submissions.status IS 'Tracks the current state of the consultation request';
COMMENT ON COLUMN public.contact_submissions.notes IS 'Internal notes for tracking follow-ups and conversations';
COMMENT ON FUNCTION public.submit_contact_form IS 'Public function for submitting contact form from website. Includes validation and sanitization.';
COMMENT ON FUNCTION public.get_submission_stats IS 'Admin function to retrieve submission statistics. Service role only.';