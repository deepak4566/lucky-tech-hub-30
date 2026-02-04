import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full filter blur-[150px]" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent/15 rounded-full filter blur-[100px]" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Icon */}
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-3xl bg-gradient-to-br from-primary to-accent mb-8 shadow-2xl shadow-primary/30">
          <Sparkles className="h-10 w-10 text-white" />
        </div>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Get Your
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
            Perfect Laptop?
          </span>
        </h2>
        
        <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
          Visit our store or call us today. We'll help you find the right laptop within your budget.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <Link to="/contact">
            <Button size="lg" className="w-full sm:w-auto bg-white text-slate-900 hover:bg-white/90 text-lg px-8 py-6 rounded-xl shadow-2xl transition-all duration-300 hover:scale-105">
              <MapPin className="mr-2 h-5 w-5" /> Visit Our Store
            </Button>
          </Link>
          <a href="tel:9391919214">
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <Phone className="mr-2 h-5 w-5" /> Call 9391919214
            </Button>
          </a>
        </div>

        {/* Info cards */}
        <div className="flex flex-wrap justify-center gap-6">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-white/70">Mon-Sat: 10AM - 8PM</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <MapPin className="h-5 w-5 text-accent" />
            <span className="text-white/70">Kukatpally, Hyderabad</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
