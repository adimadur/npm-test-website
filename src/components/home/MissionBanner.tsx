import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MissionBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0891b2] to-[#06B6D4]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission: Align Talent Strategy with Business Growth
          </h2>
          <p className="text-xl mb-8 text-gray-100 leading-relaxed">
            At Minai, we believe that the right people are the foundation of every successful business. 
            Our mission is to empower organizations with strategic talent solutions and compliant HR frameworks 
            that drive sustainable growth and operational excellence.
          </p>
          <p className="text-lg mb-10 text-gray-100">
            Whether you're scaling rapidly, entering new markets, or optimizing your workforce, 
            we're here to be your trusted HR partner every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#0891b2] hover:bg-gray-100 text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0891b2] text-lg px-8 py-6 rounded-lg transition-all duration-300"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}