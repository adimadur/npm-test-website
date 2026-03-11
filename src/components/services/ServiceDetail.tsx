import { Users, Briefcase, FileText, Target, TrendingUp, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface ServiceDetailProps {
  serviceId: string;
}

export default function ServiceDetail({ serviceId }: ServiceDetailProps) {
  const serviceData: Record<string, any> = {
    'permanent-staffing': {
      icon: Users,
      title: 'Permanent & Contract Staffing',
      description: 'End-to-end recruitment solutions for full-time and contract positions across all organizational levels and functions.',
      process: [
        {
          step: 'Requirement Analysis',
          description: 'Deep-dive consultation to understand role specifications, team dynamics, and cultural requirements.'
        },
        {
          step: 'Candidate Sourcing',
          description: 'Multi-channel sourcing from our talent database, job portals, referrals, and passive candidate networks.'
        },
        {
          step: 'Screening & Assessment',
          description: 'Technical evaluations, behavioral interviews, and skill assessments tailored to your requirements.'
        },
        {
          step: 'Interview Coordination',
          description: 'Seamless scheduling and coordination of interviews with shortlisted candidates.'
        },
        {
          step: 'Offer Management',
          description: 'Salary negotiation, offer letter preparation, and onboarding support.'
        }
      ],
      outcomes: [
        'Reduced time-to-hire by 40% on average',
        'Access to pre-vetted talent pool',
        'Higher retention rates through cultural fit assessment',
        'Flexible contract staffing for project-based needs',
        'Replacement guarantee for permanent hires'
      ]
    },
    'leadership-hiring': {
      icon: Briefcase,
      title: 'Leadership Hiring & Executive Search',
      description: 'Specialized executive search services for C-suite, VP, and senior management positions with confidential and strategic approach.',
      process: [
        {
          step: 'Strategic Consultation',
          description: 'Understanding business strategy, leadership gaps, and organizational culture at the executive level.'
        },
        {
          step: 'Market Mapping',
          description: 'Comprehensive analysis of leadership talent landscape in your industry and target markets.'
        },
        {
          step: 'Confidential Outreach',
          description: 'Discreet engagement with passive candidates through our executive network.'
        },
        {
          step: 'Executive Assessment',
          description: 'In-depth evaluation including leadership competencies, strategic thinking, and cultural alignment.'
        },
        {
          step: 'Negotiation & Onboarding',
          description: 'Complex compensation negotiation and executive onboarding support.'
        }
      ],
      outcomes: [
        'Access to passive executive talent',
        'Confidential search process',
        'Comprehensive leadership assessment',
        'Industry-specific expertise',
        'Long-term placement success'
      ]
    },
    'payroll-outsourcing': {
      icon: FileText,
      title: 'Payroll Outsourcing & Compliance',
      description: 'Complete payroll management with statutory compliance, ensuring accurate and timely processing while reducing administrative burden.',
      process: [
        {
          step: 'System Setup',
          description: 'Configuration of payroll systems, employee data migration, and compliance framework establishment.'
        },
        {
          step: 'Monthly Processing',
          description: 'Accurate calculation of salaries, deductions, taxes, and benefits with detailed payslips.'
        },
        {
          step: 'Statutory Compliance',
          description: 'PF, ESI, PT, TDS filings and remittances with complete documentation.'
        },
        {
          step: 'Reporting & Analytics',
          description: 'Monthly payroll reports, cost analysis, and compliance dashboards.'
        },
        {
          step: 'Audit Support',
          description: 'Comprehensive documentation and support for internal and statutory audits.'
        }
      ],
      outcomes: [
        '100% statutory compliance guaranteed',
        'Reduced payroll processing time',
        'Elimination of payroll errors',
        'Audit-ready documentation',
        'Cost savings on payroll administration'
      ]
    },
    'hr-process-design': {
      icon: Target,
      title: 'HR Process Design & Advisory',
      description: 'Custom HR frameworks, policies, and performance management systems designed for growing organizations.',
      process: [
        {
          step: 'Current State Assessment',
          description: 'Comprehensive audit of existing HR processes, policies, and pain points.'
        },
        {
          step: 'Framework Design',
          description: 'Development of customized HR policies, employee handbooks, and process workflows.'
        },
        {
          step: 'Performance Systems',
          description: 'Design of goal-setting frameworks, appraisal processes, and feedback mechanisms.'
        },
        {
          step: 'Implementation Support',
          description: 'Training for HR teams and managers on new processes and systems.'
        },
        {
          step: 'Continuous Improvement',
          description: 'Ongoing advisory support and process optimization based on feedback.'
        }
      ],
      outcomes: [
        'Standardized HR processes across organization',
        'Improved employee experience',
        'Clear performance management framework',
        'Compliance-ready documentation',
        'Scalable HR infrastructure'
      ]
    },
    'workforce-planning': {
      icon: TrendingUp,
      title: 'Workforce Planning & Scaling',
      description: 'Strategic workforce planning to support rapid growth, restructuring, or market expansion initiatives.',
      process: [
        {
          step: 'Business Alignment',
          description: 'Understanding business goals, growth projections, and organizational structure requirements.'
        },
        {
          step: 'Workforce Analysis',
          description: 'Current workforce assessment, skill gap analysis, and future talent needs forecasting.'
        },
        {
          step: 'Scaling Strategy',
          description: 'Development of phased hiring plans, organizational design, and budget planning.'
        },
        {
          step: 'Execution Support',
          description: 'Implementation of hiring campaigns, team building, and onboarding programs.'
        },
        {
          step: 'Monitoring & Optimization',
          description: 'Tracking of hiring metrics, cost per hire, and continuous plan refinement.'
        }
      ],
      outcomes: [
        'Aligned workforce with business strategy',
        'Optimized hiring costs and timelines',
        'Reduced hiring bottlenecks',
        'Scalable organizational structure',
        'Data-driven workforce decisions'
      ]
    }
  };

  const service = serviceData[serviceId];

  if (!service) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8">
        <p className="text-gray-600">Service not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0891b2] to-[#06B6D4] p-8 text-white">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <service.icon className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold">{service.title}</h2>
        </div>
        <p className="text-xl text-gray-100">{service.description}</p>
      </div>

      {/* Process Steps */}
      <div className="p-8">
        <h3 className="text-2xl font-bold text-[#0A2540] mb-6">Our Process</h3>
        <div className="space-y-6">
          {service.process.map((step: any, index: number) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0891b2] to-[#06B6D4] text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#0A2540] mb-2">{step.step}</h4>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outcomes */}
      <div className="p-8 bg-[#F0F4F8]">
        <h3 className="text-2xl font-bold text-[#0A2540] mb-6">Expected Outcomes</h3>
        <ul className="space-y-3">
          {service.outcomes.map((outcome: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#0891b2] flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="p-8 text-center">
        <h3 className="text-xl font-bold text-[#0A2540] mb-4">
          Ready to get started with {service.title}?
        </h3>
        <Button
          asChild
          size="lg"
          className="bg-[#0891b2] hover:bg-[#06B6D4] text-white"
        >
          <Link to="/contact">Schedule a Consultation</Link>
        </Button>
      </div>
    </div>
  );
}