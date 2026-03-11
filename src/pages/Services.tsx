import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesSidebar from '@/components/services/ServicesSidebar';
import ServiceDetail from '@/components/services/ServiceDetail';

export default function Services() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { serviceId } = useParams();
  const [selectedService, setSelectedService] = useState(serviceId || 'permanent-staffing');

  return (
    <div className="min-h-screen bg-[#F0F4F8]">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-[#0A2540] mb-8">Our Services</h1>
            
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <ServicesSidebar 
                  selectedService={selectedService} 
                  onSelectService={setSelectedService} 
                />
              </div>
              
              <div className="lg:col-span-3">
                <ServiceDetail serviceId={selectedService} />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}