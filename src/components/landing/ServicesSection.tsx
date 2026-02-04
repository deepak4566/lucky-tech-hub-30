import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Wrench, Bug, HardDrive, ArrowRight, Cpu, Monitor, Battery } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: <Wrench className="h-7 w-7" />,
      title: "Hardware Repairs",
      description: "Screen replacement, keyboard repair, motherboard fixes, and complete hardware diagnostics",
      badge: "Same Day",
      badgeColor: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
    },
    {
      icon: <Bug className="h-7 w-7" />,
      title: "Virus Removal",
      description: "Complete malware cleanup, security software installation, and system optimization",
      badge: "Quick Fix",
      badgeColor: "bg-amber-500/10 text-amber-600 border-amber-500/20"
    },
    {
      icon: <HardDrive className="h-7 w-7" />,
      title: "Data Recovery",
      description: "Recover precious files from damaged, corrupted, or failing hard drives and SSDs",
      badge: "Expert",
      badgeColor: "bg-violet-500/10 text-violet-600 border-violet-500/20"
    },
    {
      icon: <Cpu className="h-7 w-7" />,
      title: "RAM & SSD Upgrade",
      description: "Boost your laptop's performance with memory and storage upgrades",
      badge: "Popular",
      badgeColor: "bg-blue-500/10 text-blue-600 border-blue-500/20"
    },
    {
      icon: <Monitor className="h-7 w-7" />,
      title: "OS Installation",
      description: "Fresh Windows/Linux installation with all drivers and essential software",
      badge: "Complete",
      badgeColor: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20"
    },
    {
      icon: <Battery className="h-7 w-7" />,
      title: "Battery Replacement",
      description: "Genuine battery replacements to restore your laptop's portability",
      badge: "Warranty",
      badgeColor: "bg-rose-500/10 text-rose-600 border-rose-500/20"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full filter blur-[100px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 bg-primary/10 text-primary">
            <Wrench className="h-3.5 w-3.5 mr-2" /> 
            Professional Services
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Expert{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Repair Services
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Fast, reliable repairs for all laptop brands by certified technicians
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group relative border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <Badge variant="outline" className={service.badgeColor}>
                    {service.badge}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" size="lg" className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-xl">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
