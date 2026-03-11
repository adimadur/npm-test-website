import { Target, Shield, TrendingUp } from 'lucide-react';

export default function HighlightsSection() {
  const highlights = [
    {
      icon: Target,
      title: 'Precision Hiring',
      description: 'Advanced screening methodologies ensure every hire aligns with your technical requirements and cultural fit.',
      color: 'from-[#0891b2] to-[#06B6D4]'
    },
    {
      icon: Shield,
      title: 'Compliance-First',
      description: 'All our solutions prioritize regulatory compliance, protecting your organization from legal risks.',
      color: 'from-[#1E3A5F] to-[#0A2540]'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Our frameworks adapt to your growth trajectory, whether scaling from 10 to 100 employees or restructuring.',
      color: 'from-[#0891b2] to-[#06B6D4]'
    }
  ];

  return (
    <section className="py-16 bg-[#F0F4F8]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] mb-4">
              Why Businesses Choose Minai
            </h2>
            <p className="text-xl text-gray-600">
              Three core pillars that drive our success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`bg-gradient-to-br ${highlight.color} p-6 text-white`}>
                  <highlight.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold">{highlight.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}