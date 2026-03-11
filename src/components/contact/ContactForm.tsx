import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    companySize: '',
    industry: '',
    serviceInterest: '',
    message: ''
  });

  const submitMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const { data: result, error } = await supabase.rpc('submit_contact_form', {
        p_full_name: data.fullName,
        p_email: data.email,
        p_phone: data.phone || null,
        p_company_name: data.companyName || null,
        p_company_size: data.companySize || null,
        p_industry: data.industry || null,
        p_service_interest: data.serviceInterest || null,
        p_message: data.message
      });

      if (error) throw error;
      return result;
    },
    onSuccess: () => {
      toast({
        title: 'Success!',
        description: 'Your consultation request has been submitted. We will contact you within 24 hours.',
      });
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        companySize: '',
        industry: '',
        serviceInterest: '',
        message: ''
      });
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.message || 'Failed to submit form. Please try again.',
        variant: 'destructive',
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      toast({
        title: 'Validation Error',
        description: 'Please enter your full name',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.email.trim()) {
      toast({
        title: 'Validation Error',
        description: 'Please enter your email address',
        variant: 'destructive',
      });
      return;
    }

    if (!formData.message.trim()) {
      toast({
        title: 'Validation Error',
        description: 'Please enter a message',
        variant: 'destructive',
      });
      return;
    }

    submitMutation.mutate(formData);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-[#0A2540] mb-6">Request a Free Consultation</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="fullName" className="text-[#0A2540]">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="John Doe"
            className="mt-1"
            required
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-[#0A2540]">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="john@company.com"
            className="mt-1"
            required
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-[#0A2540]">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="companyName" className="text-[#0A2540]">Company Name</Label>
          <Input
            id="companyName"
            type="text"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="Your Company"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="companySize" className="text-[#0A2540]">Company Size</Label>
          <Select
            value={formData.companySize}
            onValueChange={(value) => setFormData({ ...formData, companySize: value })}
          >
            <SelectTrigger id="companySize" className="mt-1">
              <SelectValue placeholder="Select company size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10 employees</SelectItem>
              <SelectItem value="11-50">11-50 employees</SelectItem>
              <SelectItem value="51-200">51-200 employees</SelectItem>
              <SelectItem value="201-500">201-500 employees</SelectItem>
              <SelectItem value="501-1000">501-1000 employees</SelectItem>
              <SelectItem value="1000+">1000+ employees</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="industry" className="text-[#0A2540]">Industry</Label>
          <Input
            id="industry"
            type="text"
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            placeholder="e.g., Technology, Healthcare, Manufacturing"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="serviceInterest" className="text-[#0A2540]">Service Interest</Label>
          <Select
            value={formData.serviceInterest}
            onValueChange={(value) => setFormData({ ...formData, serviceInterest: value })}
          >
            <SelectTrigger id="serviceInterest" className="mt-1">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="permanent-staffing">Permanent & Contract Staffing</SelectItem>
              <SelectItem value="leadership-hiring">Leadership Hiring & Executive Search</SelectItem>
              <SelectItem value="payroll-outsourcing">Payroll Outsourcing & Compliance</SelectItem>
              <SelectItem value="hr-process-design">HR Process Design & Advisory</SelectItem>
              <SelectItem value="workforce-planning">Workforce Planning & Scaling</SelectItem>
              <SelectItem value="general-inquiry">General Inquiry</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message" className="text-[#0A2540]">
            Message <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your hiring needs or HR challenges..."
            className="mt-1 min-h-[120px]"
            required
          />
        </div>

        <Button
          type="submit"
          disabled={submitMutation.isPending}
          className="w-full bg-[#0891b2] hover:bg-[#06B6D4] text-white text-lg py-6"
        >
          {submitMutation.isPending ? (
            'Submitting...'
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Submit Request
            </>
          )}
        </Button>

        <p className="text-sm text-gray-600 text-center">
          By submitting this form, you agree to our privacy policy and terms of service.
        </p>
      </form>
    </div>
  );
}