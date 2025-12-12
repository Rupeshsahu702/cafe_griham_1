import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CoffeeLanding = () => {
  const featuredCoffees = [
    {
      id: 1,
      name: 'Caramel Macchiato',
      price: '$5.50',
      image: '/src/assets/caramel-macchiato.webp',
      alt: 'Layered caramel macchiato in a glass',
    },
    {
      id: 2,
      name: 'Iced Americano',
      price: '$4.75',
      image: '/src/assets/iced-americano.jpg',
      alt: 'Cold brew coffee in a glass',
    },
    {
      id: 3,
      name: 'Perfect Espresso',
      price: '$3.50',
      image: '/src/assets/perfect-espresso.png',
      alt: 'Espresso in a white cup',
    },
    {
      id: 4,
      name: 'Mocha Frappé',
      price: '$6.00',
      image: '/src/assets/mocha-frappe.jpg',
      alt: 'Mocha frappé with whipped cream',
    },
  ];

  return (
    <div className="min-h-screen  max-w-7xl bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative h-[500px] rounded-3xl mx-4 md:mx-8 lg:mx-16 mt-8 overflow-hidden shadow-2xl">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
            Your Daily Dose of Premium
            <br />
            Coffee
          </h1>
          <p className="text-white/95 text-base md:text-lg max-w-2xl mb-8 leading-relaxed drop-shadow-md">
            Brewed to Perfection, Served with Love. Discover our handcrafted specialty coffee
            <br className="hidden md:block" />
            drinks, made from the highest quality beans.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              Order Coffee Online
            </Button>
            <Link to='/menu' >
            <Button
              variant="secondary"
              className="bg-white hover:bg-gray-100 text-gray-900 font-semibold px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              View Menu
            </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Coffee Section */}
      <div className="px-4 md:px-8 lg:px-16 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Featured Coffee
        </h2>

        {/* Coffee Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCoffees.map((coffee) => (
            <div
              key={coffee.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Coffee Image */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <img
                  src={coffee.image}
                  alt={coffee.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>

              {/* Coffee Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {coffee.name}
                </h3>
                <p className="text-gray-600 text-lg font-semibold mb-4">
                  {coffee.price}
                </p>
                <Button
                  variant="ghost"
                  className="w-full text-gray-900 font-semibold hover:bg-amber-50 hover:text-amber-700 transition-colors border border-gray-200 rounded-lg py-2"
                >
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeLanding;
