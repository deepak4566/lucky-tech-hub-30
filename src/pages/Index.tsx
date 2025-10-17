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
      <section className="pt-20 relative bg-gradient-to-br from-blue-800 via-blue-600 to-teal-500 text-white">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
            alt="Computer background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">LUCKY COMPUTERS</h1>
            <p className="text-xl md:text-2xl mb-4">Quality Refurbished Laptops at Unbeatable Prices</p>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Your trusted destination for affordable, high-performance refurbished laptops in Hyderabad</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/services">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                  Browse Laptops <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-700">
                  Visit Store
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Location Banner */}
      <section className="bg-blue-50 py-4 border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 text-blue-800">
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              <p className="font-medium">Near the Metro Station, Pillar No. 808, Kukatpally, Hyderabad</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="tel:9391919214" className="flex items-center hover:text-blue-600">
                <Phone className="mr-2 h-5 w-5" />
                <span>9391919214</span>
              </a>
              <a href="tel:9391919215" className="flex items-center hover:text-blue-600">
                <Phone className="mr-2 h-5 w-5" />
                <span>9391919215</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Refurbished Laptops Highlight Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Premium Refurbished Laptops</h2>
            <p className="mt-4 text-xl text-gray-600">Top brands, tested quality, warranty included</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Archive className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Wide Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Dell, HP, Lenovo, and more premium brands available in various configurations</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Quality Tested</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Every laptop thoroughly inspected, cleaned, and tested before sale</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Warranty Included</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>All refurbished laptops come with warranty for your peace of mind</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Services Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Additional Services</h2>
            <p className="mt-4 text-xl text-gray-600">Complete tech solutions for all your needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="service-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <Bug className="h-7 w-7 text-blue-600" />
                </div>
                <CardTitle>Malware Removal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Comprehensive virus and malware removal services.</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="service-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <PcCase className="h-7 w-7 text-blue-600" />
                </div>
                <CardTitle>PC & Laptop Repairs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Expert hardware and software repairs for all brands.</CardDescription>
              </CardContent>
            </Card>
            
            <Card className="service-card">
              <CardHeader>
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                  <HardDrive className="h-7 w-7 text-blue-600" />
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
              <Button variant="outline">
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
            <h2 className="text-3xl font-bold text-gray-900">Our Laptop Inventory</h2>
            <p className="mt-4 text-xl text-gray-600">Browse our collection of quality refurbished laptops</p>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853" 
                      alt="Refurbished laptops" 
                      className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105" 
                    />
                  </div>
                  <h3 className="text-xl font-medium mt-4 text-center">Premium Refurbished Laptops</h3>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed" 
                      alt="Laptop collection" 
                      className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105" 
                    />
                  </div>
                  <h3 className="text-xl font-medium mt-4 text-center">Wide Range of Brands</h3>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-1">
                  <div className="overflow-hidden rounded-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1484788984921-03950022c9ef" 
                      alt="Quality tested laptops" 
                      className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105" 
                    />
                  </div>
                  <h3 className="text-xl font-medium mt-4 text-center">Quality Tested & Certified</h3>
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
                <div className="flex items-center text-yellow-500 mb-2">
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
                <div className="flex items-center text-yellow-500 mb-2">
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
                <div className="flex items-center text-yellow-500 mb-2">
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Looking for a Reliable Laptop?</h2>
          <p className="text-xl mb-8">Visit our store to explore our collection of refurbished laptops or call for availability</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
                Contact Us
              </Button>
            </Link>
            <a href="tel:9391919214">
              <Button size="lg" variant="secondary" className="bg-blue-700 text-white hover:bg-blue-800">
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
