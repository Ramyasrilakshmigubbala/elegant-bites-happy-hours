
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, UtensilsCrossed } from 'lucide-react';

type Category = 'starters' | 'mains' | 'desserts' | 'beverages';

type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  category: Category;
  isChefSpecial: boolean;
  image: string;
};

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Avocado & Mango Summer Rolls",
    description: "Fresh rice paper rolls with avocado, mango, cucumber, and herbs with a tangy peanut dipping sauce",
    price: "$12",
    category: "starters",
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1626200758563-d0b1ec993c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Wild Mushroom Soup",
    description: "Creamy blend of seasonal wild mushrooms with truffle oil and fresh herbs",
    price: "$10",
    category: "starters",
    isChefSpecial: false,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Handcrafted Artisan Gnocchi",
    description: "Potato gnocchi in a sage butter sauce with roasted pine nuts and aged parmesan",
    price: "$22",
    category: "mains",
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 4,
    name: "Royal Paneer Thali",
    description: "Assortment of premium paneer dishes with dal makhani, pulao, breads, and accompaniments",
    price: "$26",
    category: "mains",
    isChefSpecial: false,
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 5,
    name: "Saffron-Infused Risotto",
    description: "Arborio rice cooked with premium Spanish saffron, roasted vegetables, and aged parmesan",
    price: "$24",
    category: "mains",
    isChefSpecial: false,
    image: "https://images.unsplash.com/photo-1633964913295-ceb43956a0f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 6,
    name: "Signature Deconstructed Tiramisu",
    description: "Coffee-soaked ladyfingers with mascarpone cream and cocoa dust presented in a modern style",
    price: "$14",
    category: "desserts",
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1523540795314-4560437c4be3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 7,
    name: "Vanilla Bean Panna Cotta",
    description: "Silky smooth vanilla panna cotta with berry compote and almond tuile",
    price: "$13",
    category: "desserts",
    isChefSpecial: false,
    image: "https://images.unsplash.com/photo-1462043903351-f9c09a43dcba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 8,
    name: "Artisanal Rose & Cardamom Latte",
    description: "Freshly brewed espresso with steamed milk infused with rose and cardamom flavors",
    price: "$6",
    category: "beverages",
    isChefSpecial: false,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 9,
    name: "Mediterranean Mezze Platter",
    description: "Assortment of hummus, baba ganoush, falafel, and warm pita bread with olive tapenade",
    price: "$16",
    category: "starters",
    isChefSpecial: false,
    image: "https://images.unsplash.com/photo-1542345812-d98b5cd6cf98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 10,
    name: "Truffle Mac & Cheese",
    description: "Creamy three-cheese sauce with black truffle, topped with crispy breadcrumbs",
    price: "$19",
    category: "mains",
    isChefSpecial: false,
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 11,
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla bean ice cream",
    price: "$12",
    category: "desserts",
    isChefSpecial: false,
    image: "https://images.unsplash.com/photo-1611329695518-1763fc1a4fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 12,
    name: "Fresh Mint Mojito",
    description: "Muddled mint, lime, and sugar with sparkling water and crushed ice",
    price: "$8",
    category: "beverages",
    isChefSpecial: true,
    image: "https://images.unsplash.com/photo-1546171753-97d7676e4602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
  },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('starters');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const categories: { value: Category; label: string }[] = [
    { value: 'starters', label: 'Starters & Small Bites' },
    { value: 'mains', label: 'Main Course' },
    { value: 'desserts', label: 'Desserts' },
    { value: 'beverages', label: 'Beverages' },
  ];
  
  const filteredItems = menuItems.filter(item => item.category === selectedCategory);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach(el => observer.observe(el));
    
    return () => {
      elements?.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section ref={sectionRef} id="menu" className="section-padding">
      <div className="container mx-auto px-4 md:px-8">
        <span className="inline-block bg-restaurant-gold/20 text-restaurant-green px-3 py-1 rounded-full text-sm font-medium mb-4 animate-on-scroll opacity-0">
          Our Menu
        </span>
        <h2 className="section-title mb-12 animate-on-scroll opacity-0">
          Discover Culinary Excellence
        </h2>
        
        {/* Menu Categories */}
        <div className="flex flex-wrap gap-2 mb-12 animate-on-scroll opacity-0">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                selectedCategory === category.value
                  ? "bg-restaurant-green text-white"
                  : "bg-muted hover:bg-restaurant-green/10"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover-lift animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                {item.isChefSpecial && (
                  <div className="absolute top-3 right-3 bg-restaurant-gold/90 text-restaurant-green px-3 py-1 rounded-full text-xs font-medium z-10">
                    Chef's Special
                  </div>
                )}
              </div>
              <div className="p-6 bg-white dark:bg-restaurant-wood-light/5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-serif text-xl font-medium">{item.name}</h3>
                  <span className="text-restaurant-gold font-medium">{item.price}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="flex justify-center mt-12 animate-on-scroll opacity-0">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button className="px-8 py-3 bg-restaurant-gold text-restaurant-green font-medium rounded-full hover:bg-restaurant-gold-light transition-colors flex items-center gap-2">
                <UtensilsCrossed size={18} />
                <span>View Full Menu</span>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-3xl font-serif text-center mb-2">Happy Hours Full Menu</DialogTitle>
                <DialogDescription className="text-center mb-6 flex items-center justify-center gap-2">
                  <Clock size={16} /> Open daily: 11:00 AM - 10:00 PM
                </DialogDescription>
              </DialogHeader>
              
              <Tabs defaultValue="starters" className="w-full">
                <TabsList className="w-full justify-center mb-6 bg-muted/50">
                  {categories.map((category) => (
                    <TabsTrigger key={category.value} value={category.value}>
                      {category.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {categories.map((category) => (
                  <TabsContent key={category.value} value={category.value} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {menuItems
                        .filter(item => item.category === category.value)
                        .map((item) => (
                          <div key={item.id} className="flex gap-4 border-b pb-4">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-24 h-24 rounded-md object-cover" 
                            />
                            <div className="flex-1">
                              <div className="flex justify-between items-start">
                                <h3 className="font-serif text-lg font-medium">
                                  {item.name}
                                  {item.isChefSpecial && (
                                    <span className="ml-2 inline-block bg-restaurant-gold/20 text-restaurant-green px-2 py-0.5 rounded-full text-xs font-medium">
                                      Chef's Special
                                    </span>
                                  )}
                                </h3>
                                <span className="font-medium text-restaurant-gold">{item.price}</span>
                              </div>
                              <p className="text-muted-foreground text-sm mt-1">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Menu;
