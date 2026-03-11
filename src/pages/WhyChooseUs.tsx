import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Shield, TrendingUp, Users, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pillars = [
    {
      icon: Target,
      title: 'Precision Hiring',
      description: 'Our rigorous screening process ensures every candidate meets your exact technical and cultural requirements, reducing time-to-hire and improving retention rates.',
      color: 'from-[#0891b2] to-[#06B6D4]'
    },
    {
      icon: Shield,
      title: 'Compliance-First',
      description: 'We prioritize regulatory compliance in all our services, from payroll processing to contract staffing, ensuring your organization stays protected from legal risks.',
      color: 'from-[#1E3A5F] to-[#0A2540]'
    },
    {
      icon: TrendingUp,
      title: 'Scalable HR Solutions',
      description: 'Whether you are scaling from 10 to 100 employees or restructuring your workforce, our solutions adapt to your growth trajectory and business needs.',
      color: 'from-[#0891b2] to-[#06B6D4]'
    },
    {
      icon: Users,
      title: 'Industry-Agnostic Expertise',
      description: 'From technology and healthcare to manufacturing and retail, we have successfully delivered talent solutions across diverse sectors and business models.',
      color: 'from-[#1E3A5F] to-[#0A2540]'
    },
    {
      icon: CheckCircle,
      title: 'Partnership Mindset',
      description: 'We view every engagement as a long-term partnership, providing ongoing support, strategic insights, and proactive solutions as your business evolves.',
      color: 'from-[#0891b2] to-[#06B6D4]'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F0F4F8]">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A2540] to-[#1E3A5F] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Minai Pvt Ltd</h1>
              <p className="text-xl text-gray-300">
                Five core pillars that make us your ideal HR consulting partner
              </p>
            </div>
          </div>
        </section>

        {/* Pillars Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pillars.map((pillar, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className={`bg-gradient-to-br ${pillar.color} p-6 text-white`}>
                      <pillar.icon className="w-12 h-12 mb-4" />
                      <h3 className="text-2xl font-bold">{pillar.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-12 text-center">
                What Sets Us Apart
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#0891b2] flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Data-Driven Approach</h3>
                    <p className="text-gray-700">
                      We leverage analytics and market intelligence to inform our talent strategies, ensuring decisions are backed by data rather than assumptions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#0891b2] flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Transparent Communication</h3>
                    <p className="text-gray-700">
                      From project timelines to pricing structures, we maintain complete transparency throughout our engagement, building trust through honest dialogue.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#0891b2] flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Rapid Turnaround</h3>
                    <p className="text-gray-700">
                      Our extensive talent network and streamlined processes enable us to deliver qualified candidates faster than traditional recruitment methods.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#0891b2] flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Quality Guarantee</h3>
                    <p className="text-gray-700">
                      We stand behind our placements with replacement guarantees and ongoing support to ensure long-term success for both candidates and clients.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-[#0891b2] flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Continuous Innovation</h3>
                    <p className="text-gray-700">
                      We continuously evolve our methodologies, adopting the latest HR technologies and best practices to deliver cutting-edge solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0891b2] to-[#06B6D4] rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workforce?</h2>
              <p className="text-xl mb-8 text-gray-100">
                Let's discuss how our expertise can help you achieve your talent goals
              </p>
              <a
                href="/#contact"
                className="inline-block bg-white text-[#0891b2] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}