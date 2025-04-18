
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Globe, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Reach out to us for all your tech needs</p>
        </div>
      </section>
      
      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              <Card className="mb-6 p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">
                      Near the Metro Station, Pillar No. 808, Kukatpally, Hyderabad, Telangana 500072
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="mb-6 p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:9618849601" className="hover:text-blue-600">96188 49601</a>
                    </p>
                    <p className="text-gray-600">
                      <a href="tel:8919196189" className="hover:text-blue-600">89191 96189</a>
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="mb-6 p-6">
                <div className="flex items-start space-x-4">
                  <Globe className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Website</h3>
                    <p className="text-gray-600">
                      <a href="http://www.luckycomputers.in" className="hover:text-blue-600">www.luckycomputers.in</a>
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Sunday: By appointment only</p>
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Google Maps */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>
              <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://maps.app.goo.gl/DNbU6Gd86KLLA9sG9"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-4 flex justify-center">
                <a 
                  href="https://maps.app.goo.gl/DNbU6Gd86KLLA9sG9" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Button className="bg-red-600 hover:bg-red-700">
                    Get Directions
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
