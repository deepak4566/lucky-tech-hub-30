import { Link } from 'react-router-dom';
import { Phone, MapPin, Globe, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LUCKY COMPUTERS</h3>
            <p className="text-gray-300">
              Reliable. Affordable. Local Tech Experts.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a 
      href="https://maps.app.goo.gl/wPUybFNvaix7LXE16" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-gray-300 hover:underline cursor-pointer"
    >
      Near the Metro Station, Pillar No. 808, Kukatpally, Hyderabad, Telangana 500072
    </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">96188 49601, 89191 96189</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-blue-400" />
                <a href="http://www.luckycomputers.in" className="text-gray-300 hover:text-white">www.luckycomputers.in</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/luckycomputers_official?igsh=MXRwZWJrNHUwY24zaw==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="https://youtube.com/@luckycomputers-official?si=ixf7if2vZXEVaQHa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LUCKY COMPUTERS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
