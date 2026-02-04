import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul Kumar",
      role: "Software Developer",
      text: "Got a Dell laptop at 50% less than market price. Works perfectly and came with warranty. The team was very professional and helped me choose the right specs for my work.",
      rating: 5,
      verified: true
    },
    {
      name: "Priya Mehta",
      role: "Business Owner",
      text: "They fixed my MacBook screen in just 2 hours. Very professional service and reasonable pricing. I've been recommending them to all my colleagues.",
      rating: 5,
      verified: true
    },
    {
      name: "Arun Sharma",
      role: "Engineering Student",
      text: "Best place for refurbished laptops in Hyderabad. The staff helped me find the perfect laptop for my budget. Great quality at an amazing price!",
      rating: 5,
      verified: true
    },
    {
      name: "Lakshmi Reddy",
      role: "Graphic Designer",
      text: "Bought a refurbished MacBook Pro for my design work. It's been running flawlessly for 6 months now. Excellent quality and service!",
      rating: 5,
      verified: true
    },
    {
      name: "Mohammed Irfan",
      role: "IT Professional",
      text: "Their data recovery service saved my important files when I thought everything was lost. Highly skilled technicians and fair pricing.",
      rating: 5,
      verified: true
    },
    {
      name: "Sneha Patil",
      role: "Content Creator",
      text: "Amazing experience! Got an HP laptop with upgraded RAM at an unbeatable price. The 30-day warranty gave me complete peace of mind.",
      rating: 5,
      verified: true
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-amber-500/30 bg-amber-500/5 text-amber-600">
            <Star className="h-3.5 w-3.5 mr-2 fill-current" /> 
            Customer Reviews
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Loved by{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              5000+ Customers
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from our satisfied customers in Hyderabad
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group relative border-0 bg-card shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Decorative quote */}
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="h-16 w-16 text-primary" />
              </div>
              
              <CardContent className="p-6 relative">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                  ))}
                  {testimonial.verified && (
                    <span className="ml-2 flex items-center text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 mr-1 text-success" />
                      Verified
                    </span>
                  )}
                </div>
                
                {/* Quote */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Reviews Badge */}
        <div className="mt-16 flex justify-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-card border shadow-lg">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
              ))}
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="font-bold text-foreground text-lg">4.9 out of 5</p>
              <p className="text-sm text-muted-foreground">Based on 500+ Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
