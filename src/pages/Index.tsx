import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Laptop, 
  Wrench, 
  Shield, 
  Clock, 
  Star, 
  MapPin, 
  Phone, 
  CheckCircle2,
  Zap,
  HeartHandshake,
  Award,
  TrendingUp,
  RefreshCw,
  HardDrive,
  Bug
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  const laptopBrands = [
    {
      name: "HP",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      description: "Business & personal laptops",
      priceRange: "Starting ₹12,999"
    },
    {
      name: "Dell",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
      description: "Reliable workstations",
      priceRange: "Starting ₹14,999"
    },
    {
      name: "Lenovo",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
      description: "ThinkPad & IdeaPad",
      priceRange: "Starting ₹13,999"
    },
    {
      name: "ASUS",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
      description: "Gaming & productivity",
      priceRange: "Starting ₹15,999"
    },
    {
      name: "MacBook",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      description: "Apple Air & Pro",
      priceRange: "Starting ₹34,999"
    },
    {
      name: "Acer",
      image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef",
      description: "Affordable computing",
      priceRange: "Starting ₹11,999"
    }
  ];

  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "5000+", label: "Happy Customers" },
    { value: "100+", label: "Laptops in Stock" },
    { value: "30", label: "Day Warranty" }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Guaranteed",
      description: "Every laptop is thoroughly tested, cleaned, and certified before sale"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Best Prices",
      description: "Up to 60% savings compared to new laptops with same performance"
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Warranty Included",
      description: "All refurbished laptops come with 30-day warranty coverage"
    },
    {
      icon: <HeartHandshake className="h-6 w-6" />,
      title: "Expert Support",
      description: "Free tech consultation and after-sales support for all purchases"
    }
  ];

  const services = [
    {
      icon: <Wrench className="h-7 w-7" />,
      title: "Laptop Repairs",
      description: "Screen replacement, keyboard repair, motherboard fixes, and more",
      badge: "Same Day"
    },
    {
      icon: <Bug className="h-7 w-7" />,
      title: "Virus Removal",
      description: "Complete malware cleanup and security software installation",
      badge: "Quick Fix"
    },
    {
      icon: <HardDrive className="h-7 w-7" />,
      title: "Data Recovery",
      description: "Recover lost files from damaged or corrupted hard drives",
      badge: "Expert"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 relative overflow-hidden hero-gradient text-white min-h-[90vh] flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-tech-cyan rounded-full filter blur-3xl float-animation" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full filter blur-3xl float-animation" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-left">
              <Badge className="mb-4 bg-accent/20 text-accent border-accent/30 hover:bg-accent/30">
                <Zap className="h-3 w-3 mr-1" /> Trusted by 5000+ Customers
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Premium Refurbished
                <span className="block text-gradient bg-gradient-to-r from-cyan-300 to-white"> Laptops & Services</span>
              </h1>
              
              <p className="text-lg md:text-xl mb-8 text-white/80 max-w-xl">
                Get top-brand laptops at <span className="text-accent font-semibold">up to 60% off</span> with warranty. 
                Plus expert repair services in Kukatpally, Hyderabad.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a href="#laptop-inventory">
                  <Button size="lg" className="cta-glow bg-accent hover:bg-accent/90 text-white text-lg px-8">
                    Browse Laptops <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="tel:9391919214">
                  <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8">
                    <Phone className="mr-2 h-5 w-5" /> Call Now
                  </Button>
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>Quality Tested</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>30-Day Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  <span>Expert Support</span>
                </div>
              </div>
            </div>

            {/* Right - Stats cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="stat-card text-center animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl font-bold text-accent mb-1">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location Banner */}
      <section className="bg-primary py-4 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">3-2-33, Hanuman Temple Rd, Bagh Ameer, Kukatpally, Hyderabad</span>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="tel:9391919214" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">9391919214</span>
              </a>
              <a href="tel:9391919215" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">9391919215</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background bg-mesh">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hyderabad's Trusted <span className="text-primary">Laptop Experts</span>
            </h2>
            <div className="section-divider" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="service-card border-0 shadow-lg bg-card">
                <CardHeader className="pb-2">
                  <div className="feature-icon mb-4">
                    {item.icon}
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Laptop Inventory Section */}
      <section id="laptop-inventory" className="py-20 bg-secondary/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              <Laptop className="h-3 w-3 mr-1" /> Laptop Inventory
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Shop by <span className="text-primary">Brand</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quality refurbished laptops from top brands with warranty
            </p>
            <div className="section-divider mt-4" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {laptopBrands.map((brand, index) => (
              <Card key={index} className="brand-card overflow-hidden border-2 group cursor-pointer">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={brand.image} 
                    alt={`${brand.name} Laptops`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-accent text-accent-foreground">{brand.priceRange}</Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between">
                    {brand.name}
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{brand.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
            <Link to="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Phone className="mr-2 h-5 w-5" /> Contact for Custom Requirements
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Wrench className="h-3 w-3 mr-1" /> Repair Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Expert <span className="text-primary">Repair Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fast, reliable repairs for all laptop brands
            </p>
            <div className="section-divider mt-4" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card border-2 hover:border-primary/30">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="feature-icon">
                      {service.icon}
                    </div>
                    <Badge variant="secondary">{service.badge}</Badge>
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Star className="h-3 w-3 mr-1" /> Customer Reviews
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-primary">Customers Say</span>
            </h2>
            <div className="section-divider" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul K.",
                role: "Software Developer",
                text: "Got a Dell laptop at 50% less than market price. Works perfectly and came with warranty. Highly recommend!"
              },
              {
                name: "Priya M.",
                role: "Business Owner",
                text: "They fixed my MacBook screen in just 2 hours. Very professional service and reasonable pricing."
              },
              {
                name: "Arun S.",
                role: "Student",
                text: "Best place for refurbished laptops in Hyderabad. The staff helped me find the perfect laptop for my budget."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center text-warning mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-base text-foreground italic">
                    "{testimonial.text}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-semibold">{testimonial.name[0]}</span>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-accent rounded-full filter blur-3xl" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Award className="h-16 w-16 mx-auto mb-6 text-accent" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your Perfect Laptop?
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Visit our store or call us today. We'll help you find the right laptop within your budget.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                <MapPin className="mr-2 h-5 w-5" /> Visit Store
              </Button>
            </Link>
            <a href="tel:9391919214">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8">
                <Phone className="mr-2 h-5 w-5" /> Call 9391919214
              </Button>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Mon-Sat: 10AM - 8PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Kukatpally, Hyderabad</span>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;