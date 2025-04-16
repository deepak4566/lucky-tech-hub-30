
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, CheckCircle, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Get to know LUCKY COMPUTERS</p>
        </div>
      </section>
      
      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="text-lg text-gray-700 space-y-4">
                <p>
                  "LUCKY COMPUTERS was founded with a mission to provide affordable and expert computer repair services to our community. With a passion for tech and a heart for helping people, we specialize in refurbished systems, fast repairs, and data recovery. Our customers are our top priority, and we strive to deliver reliable solutions every time."
                </p>
                <p>
                  Located in the heart of Kukatpally, near Metro Station Pillar No. 808, we've been serving Hyderabad with dedication and technical expertise. Our team consists of qualified technicians who are committed to solving your tech problems efficiently.
                </p>
                <p>
                  We believe in building long-term relationships with our customers through honest service and transparent pricing. Whether you need a simple repair or a complete system overhaul, we're here to help.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80" 
                alt="Computer repair shop" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-4 text-xl text-gray-600">What drives us every day</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <CardContent className="p-0">
                <p className="text-gray-600">
                  We never compromise on the quality of our services and products. Excellence is our standard.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Users className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Focus</h3>
              <CardContent className="p-0">
                <p className="text-gray-600">
                  Our customers' satisfaction is our top priority. We listen, understand, and deliver.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <Clock className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Efficiency</h3>
              <CardContent className="p-0">
                <p className="text-gray-600">
                  We value your time and strive to provide quick and effective solutions to your tech problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
