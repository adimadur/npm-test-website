import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/contact/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F4F8]">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A2540] to-[#1E3A5F] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-gray-300">
                Schedule a free consultation to discuss your talent and HR needs
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="text-3xl font-bold text-[#0A2540] mb-6">Let's Connect</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    Whether you need to scale your team, hire leadership talent, or design compliant HR frameworks, we're here to help. Fill out the form and our team will reach out within 24 hours.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#0891b2] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0A2540] mb-1">Email Us</h3>
                        <p className="text-gray-700">contact@minai.in</p>
                        <p className="text-gray-700">hr@minai.in</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#0891b2] flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0A2540] mb-1">Call Us</h3>
                        <p className="text-gray-700">+91 98765 43210</p>
                        <p className="text-gray-700">+91 98765 43211</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#0891b2] flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#0A2540] mb-1">Visit Us</h3>
                        <p className="text-gray-700">
                          Minai Pvt Ltd<br />
                          Business Tower, 5th Floor<br />
                          MG Road, Bangalore - 560001<br />
                          Karnataka, India
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-br from-[#0891b2] to-[#06B6D4] rounded-xl text-white">
                    <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
                    <p>
                      Book a 30-minute discovery call with our HR experts to explore how we can support your business goals.
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <ContactForm />
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