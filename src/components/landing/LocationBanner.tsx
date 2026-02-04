import { MapPin, Phone, Clock } from 'lucide-react';

const LocationBanner = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary via-primary to-accent py-4 text-white overflow-hidden">
      {/* Animated shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shine" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
              <MapPin className="h-4 w-4" />
            </div>
            <span className="font-medium text-sm md:text-base">
              3-2-33, Hanuman Temple Rd, Bagh Ameer, Kukatpally, Hyderabad
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 text-white/80">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Mon-Sat: 10AM - 8PM</span>
            </div>
            <div className="flex gap-4">
              <a href="tel:9391919214" className="flex items-center gap-2 hover:text-white/80 transition-colors font-semibold">
                <Phone className="h-4 w-4" />
                <span>9391919214</span>
              </a>
              <a href="tel:9391919215" className="flex items-center gap-2 hover:text-white/80 transition-colors font-semibold">
                <Phone className="h-4 w-4" />
                <span>9391919215</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationBanner;
