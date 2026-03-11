import { HashRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import WhyChooseUs from '@/pages/WhyChooseUs';
import HowWeWork from '@/pages/HowWeWork';
import Contact from '@/pages/Contact';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
    },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<Services />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </HashRouter>
    </QueryClientProvider>
  );
}