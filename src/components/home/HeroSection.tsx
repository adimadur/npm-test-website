import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0A2540] via-[#1E3A5F] to-[#0A2540] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            We don't just fill vacancies
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-gray-300 font-medium">
            We align talent strategy with business growth
          </p>
          <p className="text-xl mb-12 text-gray-400 max-w-3xl mx-auto">
            Strategic HR consulting and staffing solutions for startups, SMEs, and enterprises across India
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-[#0891b2] hover:bg-[#06B6D4] text-white text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Hire Talent
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A2540] text-lg px-8 py-6 rounded-lg transition-all duration-300"
            >
              <Link to="/services">Explore HR Solutions</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-[#0891b2] mb-2">500+</div>
              <p className="text-gray-400">Successful Placements</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0891b2] mb-2">150+</div>
              <p className="text-gray-400">Client Partners</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0891b2] mb-2">98%</div>
              <p className="text-gray-400">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F0F4F8] to-transparent" />
    </section>
  );
}