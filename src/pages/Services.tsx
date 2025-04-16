
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PcCase, HardDrive, Bug, Archive, Tools, Shield, Database, Cloud, Cpu, Wrench } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      title: "Refurbished, Sales and Services",
      description: "Quality refurbished desktops, laptops, and accessories at affordable prices. We ensure all products are thoroughly tested and come with a warranty.",
      icon: <Archive className="h-12 w-12 text-blue-600" />
    },
    {
      title: "Malware Removal",
      description: "Complete virus and malware removal services to protect your system. We use professional tools to detect and eliminate all threats.",
      icon: <Bug className="h-12 w-12 text-blue-600" />
    },
    {
      title: "PC & Laptop Repairs",
      description: "Expert hardware and software repairs for all computer brands. Fast diagnostics and efficient solutions for any technical issue.",
      icon: <PcCase className="h-12 w-12 text-blue-600" />
    },
    {
      title: "Data Recovery & Backup",
      description: "Professional data recovery services for corrupted drives and accidental deletions. We also set up reliable backup solutions.",
      icon: <HardDrive className="h-12 w-12 text-blue-600" />
    },
    {
      title: "Computer Upgrades",
      description: "RAM upgrades, SSD installations, and other hardware enhancements to improve your computer's performance.",
      icon: <Cpu className="h-12 w-12 text-blue-600" />
    },
    {
      title: "Network Setup",
      description: "Home and office network configuration, WiFi setup, and troubleshooting for optimal connectivity.",
      icon: <Cloud className="h-12 w-12 text-blue-600" />
    },
    {
      title: "OS Installation",
      description: "Clean installation and configuration of Windows, Linux, and other operating systems with all necessary drivers.",
      icon: <Database className="h-12 w-12 text-blue-600" />
    },
    {
      title: "Preventive Maintenance",
      description: "Regular maintenance services to keep your systems running smoothly and prevent potential issues.",
      icon: <Wrench className="h-12 w-12 text-blue-600" />
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive tech solutions for all your needs</p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card">
                <CardHeader className="flex flex-col items-start">
                  {service.icon}
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us for Tech Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Our Services</h2>
            <p className="mt-4 text-xl text-gray-600">We offer the best tech services in Hyderabad</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-4">
              <Shield className="h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Trusted Experts</h3>
              <p className="text-gray-600">Experienced technicians with extensive knowledge in computer repairs and IT services.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <Tools className="h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Quality Repairs</h3>
              <p className="text-gray-600">We use high-quality components and thorough testing procedures for all repairs.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4">
              <Database className="h-16 w-16 text-blue-600 mb-4" />
              <h3 className="text-xl font-medium mb-2">Data Security</h3>
              <p className="text-gray-600">Your data privacy is our priority with secure handling procedures.</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
