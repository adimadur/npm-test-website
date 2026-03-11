import { Users, Briefcase, FileText, Target, TrendingUp } from 'lucide-react';

interface ServicesSidebarProps {
  selectedService: string;
  onSelectService: (serviceId: string) => void;
}

export default function ServicesSidebar({ selectedService, onSelectService }: ServicesSidebarProps) {
  const services = [
    {
      id: 'permanent-staffing',
      icon: Users,
      title: 'Permanent & Contract Staffing'
    },
    {
      id: 'leadership-hiring',
      icon: Briefcase,
      title: 'Leadership Hiring & Executive Search'
    },
    {
      id: 'payroll-outsourcing',
      icon: FileText,
      title: 'Payroll Outsourcing & Compliance'
    },
    {
      id: 'hr-process-design',
      icon: Target,
      title: 'HR Process Design & Advisory'
    },
    {
      id: 'workforce-planning',
      icon: TrendingUp,
      title: 'Workforce Planning & Scaling'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sticky top-24">
      <h3 className="text-lg font-bold text-[#0A2540] mb-4 px-2">Services</h3>
      <nav className="space-y-2">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => onSelectService(service.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
              selectedService === service.id
                ? 'bg-gradient-to-r from-[#0891b2] to-[#06B6D4] text-white shadow-md'
                : 'text-gray-700 hover:bg-[#F0F4F8]'
            }`}
          >
            <service.icon className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm font-medium">{service.title}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}