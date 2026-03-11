import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'How We Work', href: '/how-we-work' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Permanent & Contract Staffing', href: '/services/permanent-staffing' },
    { name: 'Leadership Hiring', href: '/services/leadership-hiring' },
    { name: 'Payroll Outsourcing', href: '/services/payroll-outsourcing' },
    { name: 'HR Process Design', href: '/services/hr-process-design' },
    { name: 'Workforce Planning', href: '/services/workforce-planning' },
  ];

  return (
    <footer className="bg-[#0A2540] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Summary */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0891b2] to-[#06B6D4] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-2xl font-bold">Minai</span>
            </div>
            <p className="text-gray-300 mb-4">
              Strategic HR consulting and staffing solutions for businesses across India. We align talent strategy with business growth.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:contact@minai.in"
                className="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center hover:bg-[#0891b2] transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+919876543210"
                className="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center hover:bg-[#0891b2] transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-[#0891b2] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-gray-300 hover:text-[#0891b2] transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0891b2] flex-shrink-0 mt-1" />
                <p className="text-gray-300 text-sm">
                  Business Tower, 5th Floor<br />
                  MG Road, Bangalore - 560001<br />
                  Karnataka, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#0891b2] flex-shrink-0" />
                <p className="text-gray-300 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0891b2] flex-shrink-0" />
                <p className="text-gray-300 text-sm">contact@minai.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Minai Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-[#0891b2] transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-[#0891b2] transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-400 hover:text-[#0891b2] transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}