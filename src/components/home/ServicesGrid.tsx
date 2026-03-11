import { Link } from 'react-router-dom';
import { Users, Briefcase, FileText, Target, TrendingUp, ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  const services = [
    {
      icon: Users,
      title: 'Permanent & Contract Staffing',
      description: 'End-to-end recruitment for full-time and contract positions across all levels and functions.',
      href: '/services/permanent-staffing',
      color: 'from-[#0891b2] to-[#06B6D4]'
    },
    {
      icon: Briefcase,
      title: 'Leadership Hiring & Executive Search',
      description: 'Specialized search for C-suite, VP, and senior management roles with confidential processes.',
      href: '/services/leadership-hiring',
      color: 'from-[#1E3A5F] to-[#0A2540]'
    },
    {
      icon: FileText,
      title: 'Payroll Outsourcing & Compliance',
      description: 'Complete payroll management with statutory compliance, tax filings, and audit support.',
      href: '/services/payroll-outsourcing',
      color: 'from-[#0891b2] to-[#06B6D4]'
    },
    {
      icon: Target,
      title: 'HR Process Design & Advisory',
      description: 'Custom HR frameworks, policies, and performance management systems for growing organizations.',
      href: '/services/hr-process-design',
      color: 'from-[#1E3A5F] to-[#0A2540]'
    },
    {
      icon: TrendingUp,
      title: 'Workforce Planning & Scaling',
      description: 'Strategic workforce planning to support rapid growth, restructuring, or market expansion.',
      href: '/services/workforce-planning',
      color: 'from-[#0891b2] to-[#06B6D4]'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive HR solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className="group bg-[#F0F4F8] rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#0891b2]"
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#0A2540] mb-3 group-hover:text-[#0891b2] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-[#0891b2] font-semibold group-hover:gap-2 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}