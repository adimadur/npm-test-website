import { Building2, Users, Briefcase } from 'lucide-react';

export default function ClientSegments() {
  const segments = [
    {
      icon: Building2,
      title: 'Startups',
      description: 'Rapid team building, founder-level hiring, and scalable HR frameworks for early-stage companies.',
      features: [
        'Quick turnaround for critical hires',
        'Flexible engagement models',
        'Startup-friendly pricing',
        'Culture-fit assessments'
      ]
    },
    {
      icon: Users,
      title: 'SMEs',
      description: 'Strategic talent acquisition and HR process optimization for growing mid-market businesses.',
      features: [
        'Department-level hiring campaigns',
        'HR policy documentation',
        'Compliance management',
        'Performance frameworks'
      ]
    },
    {
      icon: Briefcase,
      title: 'MNCs',
      description: 'Enterprise-grade staffing solutions and workforce planning for large organizations.',
      features: [
        'Volume hiring capabilities',
        'Executive search services',
        'Multi-location coordination',
        'Dedicated account management'
      ]
    }
  ];

  return (
    <section className="py-16 bg-[#F0F4F8]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              We Serve All Business Sizes
            </h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for startups, SMEs, and multinational corporations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0891b2] to-[#06B6D4] flex items-center justify-center mb-6">
                  <segment.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A2540] mb-3">{segment.title}</h3>
                <p className="text-gray-700 mb-6">{segment.description}</p>
                <ul className="space-y-2">
                  {segment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0891b2] mt-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}