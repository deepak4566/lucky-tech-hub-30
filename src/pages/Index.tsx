
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, PcCase, HardDrive, Bug, Archive, Star, Calendar, MapPin, Phone, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 relative bg-gradient-to-br from-red-800 via-red-600 to-orange-500 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
            alt="Computer background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <img 
                src="/lovable-uploads/9a4c33af-8c3b-406a-83c2-87605cc2974d.png" 
                alt="Lucky Computers Logo" 
                className="w-full max-w-[300px] rounded-lg"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">LUCKY COMPUTERS</h1>
              <p className="text-xl md:text-2xl mb-8">Reliable. Affordable. Local Tech Experts.</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-red-700 hover:bg-gray-100">
                    Visit Store <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="secondary" className="bg-red-700 text-white hover:bg-red-800">
                  <Calendar className="mr-2 h-5 w-5" /> Opening 24th April 2025
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location Banner */}
      <section className="bg-red-50 py-4 border-y border-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 text-red-800">
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              <p className="font-medium">Near the Metro Station, Pillar No. 808, Kukatpally, Hyderabad</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="tel:9618849601" className="flex items-center hover:text-red-600">
                <Phone className="mr-2 h-5 w-5" />
                <span>96188 49601</span>
              </a>
              <a href="http://www.luckycomputers.in" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-red-600">
                <Globe className="mr-2 h-5 w-5" />
                <span>www.luckycomputers.in</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">Professional tech solutions for all your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="service-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-2">
                  <Archive className="h-7 w-7 text-red-600" />
                </div>
                <CardTitle>Refurbished, Sales and Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Quality refurbished computers and laptops at affordable prices.</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="service-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-2">
                  <Bug className="h-7 w-7 text-red-600" />
                </div>
                <CardTitle>Malware Removal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Comprehensive virus and malware removal services.</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="service-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-2">
                  <PcCase className="h-7 w-7 text-red-600" />
                </div>
                <CardTitle>PC & Laptop Repairs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Expert hardware and software repairs for all brands.</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="service-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center mb-2">
                  <HardDrive className="h-7 w-7 text-red-600" />
                </div>
                <CardTitle>Data Recovery & Backup</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Professional data recovery and backup solutions.</CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Work Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Work</h2>
            <p className="mt-4 text-xl text-gray-600">See our recent projects and services</p>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475" 
                      alt="Computer repair" 
                      className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105" 
                    />
                  </div>
                  <h3 className="text-xl font-medium mt-4 text-center">Circuit Board Repair</h3>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                      alt="Laptop repair" 
                      className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105" 
                    />
                  </div>
                  <h3 className="text-xl font-medium mt-4 text-center">Laptop Services</h3>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                      alt="Computer support" 
                      className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105" 
                    />
                  </div>
                  <h3 className="text-xl font-medium mt-4 text-center">Technical Support</h3>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-xl text-gray-600">Trusted by customers across Hyderabad</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center text-orange-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <CardTitle>Fast Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  "Quick diagnostics and efficient repairs saved me valuable time. Highly recommended!"
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center text-orange-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <CardTitle>Affordable Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  "Great value for money. They offer quality services at reasonable rates compared to other shops."
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center text-orange-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <CardTitle>Expert Staff</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  "The technicians are knowledgeable and explained the issues clearly. Very professional service."
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Tech Support?</h2>
          <p className="text-xl mb-8">Visit our store or contact us for immediate assistance</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white text-red-600 hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <a href="tel:9618849601">
              <Button size="lg" variant="secondary" className="bg-red-700 text-white hover:bg-red-800">
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
