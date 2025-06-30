
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/lovable-uploads/55871e73-5f88-4761-9b04-7b36cd36e5df.png",
      alt: "Lucky Computers store front with signboard"
    },
    {
      src: "/lovable-uploads/93759444-6f5d-4004-beae-7a8b2c151401.png",
      alt: "Interior view of Lucky Computers showroom with laptops display"
    },
    {
      src: "/lovable-uploads/9448a7c8-bac1-4d3b-a07f-7c8e9b9ca65a.png",
      alt: "Dell laptops collection and repair workspace"
    },
    {
      src: "/lovable-uploads/67f13e2e-8806-4d01-845e-1b130fb946d2.png",
      alt: "Technician repairing laptop motherboard"
    },
    {
      src: "/lovable-uploads/7054d21a-dba8-4e4f-bd36-481991f01e3f.png",
      alt: "Professional laptop repair service in progress"
    },
    {
      src: "/lovable-uploads/1c596bdc-4678-4903-81c3-ac659f7ad0e8.png",
      alt: "Close-up of laptop motherboard repair work"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-xl">Take a look at our shop and services</p>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Image Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-transparent border-0 shadow-none">
          <img 
            src={selectedImage || ''} 
            alt="Gallery preview" 
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Gallery;
