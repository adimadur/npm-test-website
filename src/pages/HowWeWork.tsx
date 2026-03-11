import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Users, FileText, Shield, CheckCircle } from 'lucide-react';

export default function HowWeWork() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const steps = [
    {
      number: 1,
      icon: Search,
      title: 'Discovery',
      description: 'We begin with a comprehensive consultation to understand your business objectives, organizational culture, current challenges, and specific talent requirements.',
      details: [
        'In-depth stakeholder interviews',
        'Analysis of current workforce structure',
        'Identification of skill gaps and hiring needs',
        'Definition of success metrics and timelines'
      ]
    },
    {
      number: 2,
      icon: Users,
      title: 'Talent Mapping',
      description: 'Our team conducts extensive market research and leverages our talent network to identify and engage qualified candidates who match your requirements.',
      details: [
        'Multi-channel candidate sourcing',
        'Rigorous screening and assessment',
        'Technical and behavioral evaluations',
        'Reference verification and background checks'
      ]
    },
    {
      number: 3,
      icon: FileText,
      title: 'Framework Design',
      description: 'For HR advisory engagements, we design customized frameworks, policies, and processes tailored to your organizational needs and compliance requirements.',
      details: [
        'HR policy documentation',
        'Compensation and benefits structure',
        'Performance management systems',
        'Employee lifecycle workflows'
      ]
    },
    {
      number: 4,
      icon: Shield,
      title: 'Compliance Assurance',
      description: 'We ensure all our solutions meet statutory requirements, from employment contracts to payroll processing, protecting your organization from legal risks.',
      details: [
        'Labor law compliance review',
        'Statutory registration and filings',
        'Contract and agreement drafting',
        'Audit-ready documentation'
      ]
    },
    {
      number: 5,
      icon: CheckCircle,
      title: 'Ongoing Support',
      description: 'Our partnership does not end with placement or implementation. We provide continuous support, monitoring, and optimization to ensure long-term success.',
      details: [
        'Regular performance reviews',
        'Proactive issue resolution',
        'Strategic workforce planning',
        'Continuous process improvement'
      ]
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">How We Work</h1>
              <p className="text-xl text-gray-300">
                Our proven 5-step methodology ensures successful outcomes for every engagement
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#0891b2]" />

                {/* Steps */}
                <div className="space-y-16">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      } flex-col gap-8`}
                    >
                      {/* Content Card */}
                      <div className="md:w-5/12 w-full">
                        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0891b2] to-[#06B6D4] flex items-center justify-center text-white font-bold text-xl">
                              {step.number}
                            </div>
                            <h3 className="text-2xl font-bold text-[#0A2540]">{step.title}</h3>
                          </div>
                          <p className="text-gray-700 mb-6">{step.description}</p>
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-[#0891b2] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-600">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Center Icon */}
                      <div className="md:w-2/12 w-full flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0891b2] to-[#06B6D4] flex items-center justify-center shadow-lg z-10">
                          <step.icon className="w-10 h-10 text-white" />
                        </div>
                      </div>

                      {/* Spacer */}
                      <div className="md:w-5/12 w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-12 text-center">
                Flexible Engagement Models
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-[#F0F4F8] to-white rounded-xl p-6 border-2 border-[#0891b2]">
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">Project-Based</h3>
                  <p className="text-gray-700">
                    Fixed-scope engagements with defined deliverables and timelines, ideal for specific hiring campaigns or HR projects.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#F0F4F8] to-white rounded-xl p-6 border-2 border-[#0891b2]">
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">Retainer Model</h3>
                  <p className="text-gray-700">
                    Ongoing partnership with dedicated resources for continuous talent acquisition and HR advisory support.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#F0F4F8] to-white rounded-xl p-6 border-2 border-[#0891b2]">
                  <h3 className="text-xl font-bold text-[#0A2540] mb-3">Hybrid Approach</h3>
                  <p className="text-gray-700">
                    Combination of project-based and retainer services, providing flexibility as your needs evolve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#0A2540] to-[#1E3A5F] rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Let's Start Your Journey</h2>
              <p className="text-xl mb-8 text-gray-300">
                Schedule a discovery call to discuss your talent and HR needs
              </p>
              <a
                href="/#contact"
                className="inline-block bg-[#0891b2] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#06B6D4] transition-colors duration-300"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}