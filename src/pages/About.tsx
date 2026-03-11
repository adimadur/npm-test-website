import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Users, TrendingUp, Shield } from 'lucide-react';

export default function About() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F4F8]">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A2540] to-[#1E3A5F] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Minai Pvt Ltd</h1>
              <p className="text-xl text-gray-300">
                Your strategic partner in building high-performing teams and scalable HR frameworks
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl font-bold text-[#0A2540] mb-6">Who We Are</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Minai Pvt Ltd is a leading HR consulting and staffing firm specializing in workforce solutions for businesses across India. We combine deep industry expertise with a data-driven approach to deliver talent strategies that align with your business goals.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  From startups to multinational corporations, we partner with organizations to solve their most critical talent challenges—whether it's scaling teams rapidly, hiring niche leadership roles, or designing compliant HR frameworks.
                </p>
                <p className="text-lg text-gray-700">
                  Our mission is simple: we don't just fill vacancies—we align talent strategy with business growth.
                </p>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="aspect-video bg-gradient-to-br from-[#0891b2] to-[#06B6D4] rounded-xl flex items-center justify-center">
                  <Users className="w-24 h-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-[#0891b2] to-[#06B6D4] rounded-2xl p-8 text-white">
                  <Target className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-lg">
                    To empower businesses with strategic talent solutions and compliant HR frameworks that drive sustainable growth and operational excellence.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-[#1E3A5F] to-[#0A2540] rounded-2xl p-8 text-white">
                  <TrendingUp className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-lg">
                    To be India's most trusted HR consulting partner, recognized for precision hiring, compliance excellence, and transformative workforce strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0A2540] mb-12 text-center">Our Approach</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#0891b2] text-white flex items-center justify-center font-bold text-lg">
                      1
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 flex-grow">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Precision Hiring</h3>
                    <p className="text-gray-700">
                      We use advanced screening methodologies and industry-specific assessments to ensure every hire aligns with your technical requirements and cultural fit.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#0891b2] text-white flex items-center justify-center font-bold text-lg">
                      2
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 flex-grow">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Compliance-First Framework</h3>
                    <p className="text-gray-700">
                      Our payroll and HR advisory services are built on a foundation of regulatory compliance, ensuring your organization meets all statutory requirements.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#0891b2] text-white flex items-center justify-center font-bold text-lg">
                      3
                    </div>
                  </div>
                  <div className="bg-white rounded-xl shadow-md p-6 flex-grow">
                    <h3 className="text-xl font-bold text-[#0A2540] mb-2">Strategic Partnerships</h3>
                    <p className="text-gray-700">
                      We view every client relationship as a long-term partnership, providing ongoing support and adapting our strategies as your business evolves.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* India Market Positioning */}
        <section className="py-16 bg-gradient-to-br from-[#0A2540] to-[#1E3A5F] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Shield className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-6">Positioned for the Indian Market</h2>
              <p className="text-xl text-gray-300 mb-8">
                With deep understanding of India's diverse business landscape, labor laws, and talent ecosystems, we deliver solutions tailored to local market dynamics while maintaining global best practices.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-4xl font-bold text-[#06B6D4] mb-2">500+</div>
                  <p className="text-gray-300">Successful Placements</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#06B6D4] mb-2">150+</div>
                  <p className="text-gray-300">Client Partners</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#06B6D4] mb-2">98%</div>
                  <p className="text-gray-300">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}