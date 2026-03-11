-- ============================================================================
-- Minai Pvt Ltd B2B HR Consulting Website - Seed Data
-- Sample contact form submissions for testing
-- ============================================================================

-- ============================================================================
-- SAMPLE CONTACT SUBMISSIONS
-- ============================================================================

-- Submission 1: Startup inquiry
INSERT INTO public.contact_submissions (
  id,
  full_name,
  email,
  phone,
  company_name,
  company_size,
  industry,
  service_interest,
  message,
  status,
  created_at
) VALUES (
  'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa',
  'Rajesh Kumar',
  'rajesh.kumar@techinnovate.com',
  '+91 98765 43210',
  'TechInnovate Solutions',
  '10-50 employees',
  'Technology',
  'Recruitment & Talent Acquisition',
  'We are a growing startup looking to scale our engineering team. We need support with technical recruitment and employer branding strategies. Would love to discuss how Minai can help us attract top talent.',
  'contacted'::submission_status,
  NOW() - INTERVAL '3 days'
) ON CONFLICT (id) DO NOTHING;

-- Submission 2: SME inquiry
INSERT INTO public.contact_submissions (
  id,
  full_name,
  email,
  phone,
  company_name,
  company_size,
  industry,
  service_interest,
  message,
  status,
  created_at
) VALUES (
  'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb',
  'Priya Sharma',
  'priya.sharma@greenleafmanufacturing.in',
  '+91 98123 45678',
  'GreenLeaf Manufacturing',
  '51-200 employees',
  'Manufacturing',
  'HR Compliance & Payroll',
  'Our company is expanding to multiple states and we need assistance with HR compliance across different regions. We also want to streamline our payroll processes. Looking forward to your consultation.',
  'in_progress'::submission_status,
  NOW() - INTERVAL '5 days'
) ON CONFLICT (id) DO NOTHING;

-- Submission 3: MNC inquiry
INSERT INTO public.contact_submissions (
  id,
  full_name,
  email,
  phone,
  company_name,
  company_size,
  industry,
  service_interest,
  message,
  status,
  created_at
) VALUES (
  'cccccccc-cccc-cccc-cccc-cccccccccccc',
  'Michael Chen',
  'michael.chen@globalfinancegroup.com',
  '+91 98456 78901',
  'Global Finance Group India',
  '200+ employees',
  'Financial Services',
  'Training & Leadership Development',
  'We''re looking to implement a comprehensive leadership development program for our middle management. We need a partner who understands the financial services industry and can deliver customized training solutions.',
  'converted'::submission_status,
  NOW() - INTERVAL '2 weeks'
) ON CONFLICT (id) DO NOTHING;

-- Submission 4: Recent new inquiry
INSERT INTO public.contact_submissions (
  id,
  full_name,
  email,
  phone,
  company_name,
  company_size,
  industry,
  service_interest,
  message,
  status,
  created_at
) VALUES (
  'dddddddd-dddd-dddd-dddd-dddddddddddd',
  'Anita Desai',
  'anita.desai@healthcareplusin.com',
  '+91 99887 65432',
  'HealthcarePlus India',
  '51-200 employees',
  'Healthcare',
  'Performance Management Systems',
  'We need to overhaul our performance management system to align with modern best practices. Looking for a partner to help us design and implement a new framework that drives employee engagement and business results.',
  'new'::submission_status,
  NOW() - INTERVAL '1 day'
) ON CONFLICT (id) DO NOTHING;

-- Submission 5: E-commerce startup
INSERT INTO public.contact_submissions (
  id,
  full_name,
  email,
  phone,
  company_name,
  company_size,
  industry,
  service_interest,
  message,
  status,
  created_at
) VALUES (
  'eeeeeeee-eeee-eeee-eeee-eeeeeeeeeeee',
  'Vikram Patel',
  'vikram@quickcommerce.co.in',
  '+91 97654 32109',
  'QuickCommerce',
  '10-50 employees',
  'E-commerce',
  'Recruitment & Talent Acquisition',
  'Fast-growing e-commerce startup seeking HR partnership for high-volume hiring across logistics, tech, and operations. Need scalable recruitment solutions and onboarding processes.',
  'new'::submission_status,
  NOW() - INTERVAL '6 hours'
) ON CONFLICT (id) DO NOTHING;

-- Submission 6: Educational institution
INSERT INTO public.contact_submissions (
  id,
  full_name,
  email,
  company_name,
  company_size,
  industry,
  service_interest,
  message,
  status,
  notes,
  created_at
) VALUES (
  'ffffffff-ffff-ffff-ffff-ffffffffffff',
  'Dr. Meera Iyer',
  'meera.iyer@brighthorizonsedu.org',
  'Bright Horizons Education Group',
  '200+ employees',
  'Education',
  'Training & Leadership Development',
  'We are a network of private schools looking to implement faculty development programs and leadership training for our principals and administrators. Interested in understanding your training methodologies.',
  'contacted'::submission_status,
  'Scheduled call for next Tuesday 3 PM. Send proposal deck.',
  NOW() - INTERVAL '4 days'
) ON CONFLICT (id) DO NOTHING;

-- ============================================================================
-- VERIFICATION QUERIES (Comment out in production)
-- ============================================================================

-- Verify all submissions were created
-- SELECT 
--   full_name,
--   company_name,
--   service_interest,
--   status,
--   created_at
-- FROM public.contact_submissions
-- ORDER BY created_at DESC;

-- Check status distribution
-- SELECT 
--   status,
--   COUNT(*) as count
-- FROM public.contact_submissions
-- GROUP BY status
-- ORDER BY count DESC;