import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, TrendingUp, RefreshCw, HeartHandshake, Award, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Guaranteed",
      description: "Every laptop undergoes 50+ point inspection and testing before sale",
      highlight: "100% Tested"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Unbeatable Prices",
      description: "Save up to 60% compared to new laptops with identical performance",
      highlight: "Best Value"
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Warranty Included",
      description: "All refurbished laptops come with comprehensive 30-day warranty",
      highlight: "30 Days"
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Expert Support",
      description: "Free technical consultation and lifetime after-sales support",
      highlight: "Free Help"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute inset-0 bg-mesh opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 bg-primary/5">
            <Award className="h-3.5 w-3.5 mr-2 text-primary" />
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Hyderabad's Most{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Trusted Laptop Shop
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            10+ years of serving customers with quality refurbished laptops and professional repair services
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <Card 
              key={index} 
              className="group relative border-0 bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <CardContent className="p-6 relative">
                {/* Icon */}
                <div className="mb-4 relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] px-2">
                    {item.highlight}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {[
            { icon: <CheckCircle className="h-5 w-5 text-success" />, text: "Verified Business" },
            { icon: <Award className="h-5 w-5 text-amber-500" />, text: "10+ Years Experience" },
            { icon: <Shield className="h-5 w-5 text-primary" />, text: "Secure Transactions" }
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-muted-foreground">
              {badge.icon}
              <span className="font-medium">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
