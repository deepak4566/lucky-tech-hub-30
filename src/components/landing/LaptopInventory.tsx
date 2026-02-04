import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Laptop, ArrowRight, Phone, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const LaptopInventory = () => {
  const laptopBrands = [
    {
      name: "HP",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      description: "Business & personal laptops",
      priceRange: "₹12,999",
      tag: "Popular"
    },
    {
      name: "Dell",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
      description: "Reliable workstations",
      priceRange: "₹14,999",
      tag: "Best Seller"
    },
    {
      name: "Lenovo",
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed",
      description: "ThinkPad & IdeaPad series",
      priceRange: "₹13,999",
      tag: "Business"
    },
    {
      name: "ASUS",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302",
      description: "Gaming & productivity",
      priceRange: "₹15,999",
      tag: "Gaming"
    },
    {
      name: "MacBook",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      description: "Apple Air & Pro models",
      priceRange: "₹34,999",
      tag: "Premium"
    },
    {
      name: "Acer",
      image: "https://images.unsplash.com/photo-1484788984921-03950022c9ef",
      description: "Affordable computing",
      priceRange: "₹11,999",
      tag: "Value"
    }
  ];

  return (
    <section id="laptop-inventory" className="py-24 relative overflow-hidden scroll-mt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 border-primary/30 bg-primary/5">
            <Laptop className="h-3.5 w-3.5 mr-2 text-primary" /> 
            Laptop Collection
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Shop by{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Brand
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quality-tested refurbished laptops from top global brands, all with warranty
          </p>
        </div>
        
        {/* Brands Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {laptopBrands.map((brand, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={brand.image} 
                  alt={`${brand.name} Laptops`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Tag */}
                <Badge className="absolute top-4 left-4 bg-white/90 text-foreground backdrop-blur-sm">
                  {brand.tag}
                </Badge>
                
                {/* Price badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="text-white/60 text-xs mb-1">Starting from</p>
                    <p className="text-2xl font-bold text-white">{brand.priceRange}</p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">{brand.description}</p>
                  </div>
                </div>
              </CardContent>
              
              {/* Hover border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-lg transition-colors duration-300 pointer-events-none" />
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
            <Sparkles className="h-8 w-8 text-primary" />
            <p className="text-lg text-muted-foreground">Can't find what you're looking for?</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white rounded-xl">
                  <Phone className="mr-2 h-5 w-5" /> Contact for Custom Requirements
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaptopInventory;
