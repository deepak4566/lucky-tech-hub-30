import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Phone, CheckCircle2, Zap, Sparkles } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { value: "10+", label: "Years Experience", suffix: "" },
    { value: "5000+", label: "Happy Customers", suffix: "" },
    { value: "100+", label: "Laptops in Stock", suffix: "" },
    { value: "30", label: "Day Warranty", suffix: "" }
  ];

  return (
    <section className="pt-20 relative overflow-hidden min-h-[100vh] flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full filter blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/20 rounded-full filter blur-[100px] animate-pulse-slow animation-delay-2000" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-violet-500/10 rounded-full filter blur-[80px] animate-float" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-left">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 mb-6 animate-fade-up">
              <Badge className="px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 text-white backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 mr-2 text-accent" />
                Trusted by 5000+ Customers in Hyderabad
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] animate-fade-up animation-delay-100">
              <span className="text-white">Premium</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-cyan-400 bg-clip-text text-transparent">
                Refurbished Laptops
              </span>
              <br />
              <span className="text-white/90 text-3xl md:text-4xl lg:text-5xl">& Expert Services</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-white/60 max-w-xl animate-fade-up animation-delay-200 leading-relaxed">
              Get top-brand laptops at <span className="text-accent font-semibold">up to 60% off</span> retail prices. 
              Every device is certified, tested, and backed by our 30-day warranty.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-up animation-delay-300">
              <a href="#laptop-inventory">
                <Button size="lg" className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg px-8 py-6 rounded-xl shadow-2xl shadow-primary/25 transition-all duration-300 hover:shadow-primary/40 hover:scale-105">
                  <span className="relative z-10 flex items-center">
                    Browse Laptops 
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </a>
              <a href="tel:9391919214">
                <Button size="lg" variant="outline" className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 text-lg px-8 py-6 rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105">
                  <Phone className="mr-2 h-5 w-5" /> Call Now
                </Button>
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 animate-fade-up animation-delay-400">
              {['Quality Tested', '30-Day Warranty', 'Expert Support'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-white/50">
                  <div className="h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="h-3 w-3 text-accent" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Premium stats cards */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="group relative animate-fade-up"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300">
                    <div className="text-4xl xl:text-5xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white/50 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Floating badge */}
            <div className="mt-6 flex justify-center animate-fade-up animation-delay-800">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 backdrop-blur-sm">
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-8 w-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xs font-bold text-white border-2 border-slate-900">
                      ⭐
                    </div>
                  ))}
                </div>
                <div className="text-white/80 text-sm">
                  <span className="font-semibold text-white">4.9/5</span> from 500+ reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
