import React, { useState } from 'react';
import { Search, ShoppingCart } from 'lucide-react';

// Import images at the top
import machiatoImg from '../assets/machiato.png';
import coldBrewImg from '../assets/cold-brew-1.png';
import latteImg from '../assets/vanila.png';
import pumpkin from '../assets/pumpkin.png';
import mocha from '../assets/iced-mocha.png';
import americano from '../assets/americano.png';

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Espresso', 'Lattes', 'Cold Brew', 'Seasonal'];

    const coffeeItems = [
        {
            id: 1,
            name: 'Caramel Macchiato',
            price: '$4.75',
            description: 'Rich espresso with steamed milk and a sweet caramel drizzle.',
            image: machiatoImg,
            category: 'Espresso'
        },
        {
            id: 2,
            name: 'Classic Cold Brew',
            price: '$4.25',
            description: 'Smooth, slow-steeped coffee with a naturally sweet finish.',
            image: coldBrewImg,
            category: 'Cold Brew'
        },
        {
            id: 3,
            name: 'Vanilla Bean Latte',
            price: '$5.00',
            description: 'Creamy latte with a delicate hint of real vanilla bean.',
            image: latteImg,
            category: 'Lattes'
        },
        {
            id: 4,
            name: 'Pumpkin Spice Latte',
            price: '$5.50',
            description: 'Seasonal favorite with warm spices and real pumpkin.',
            image: pumpkin,
            category: 'Seasonal'
        },
        {
            id: 5,
            name: 'Iced Mocha',
            price: '$3.50',
            description: 'Bold and intense double shot of premium espresso.',
            image: mocha,
            category: 'Espresso'
        },
        {
            id: 6,
            name: 'Honey Oat Latte',
            price: '$4.95',
            description: 'Smooth oat milk latte sweetened with natural honey.',
            image: americano,
            category: 'Lattes'
        }
    ];

    // Filter items based on active category
    const filteredItems = coffeeItems.filter(item => {
        // Check category match
        const categoryMatch = activeCategory === 'All' || item.category === activeCategory;

        // Check search match (searches in name and description)
        const searchMatch = searchQuery === '' ||
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());

        return categoryMatch && searchMatch;
    });
    return (
        <div className="min-h-screen bg-[#F5EFE0] py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold text-[#4A3933] mb-4">
                        Our Coffee Menu
                    </h1>
                    <p className="text-[#6B5B54] max-w-2xl mx-auto leading-relaxed">
                        Brewed to Perfection, Served with Love. Explore our handcrafted coffee drinks made from the finest beans.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-md mx-auto mb-8">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#6B5B54] w-5 h-5" />
                        <input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            type="text"
                            placeholder="Search for your favorite coffee"
                            className="w-full pl-12 pr-4 py-3 rounded-full bg-white/60 backdrop-blur-sm border border-[#D4C5B9] focus:outline-none focus:border-[#4A3933] text-[#4A3933] placeholder-[#8B7B74]"
                        />
                    </div>
                </div>

                {/* Category Pills */}
                <div className="flex justify-center gap-3 mb-10 flex-wrap">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${activeCategory === category
                                    ? 'bg-[#3D3833] text-white shadow-lg'
                                    : 'bg-white/60 text-[#4A3933] hover:bg-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Coffee Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white/40 backdrop-blur-sm rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                {/* Image Container */}
                                <div className="aspect-square bg-gradient-to-br from-[#2C2622] to-[#1A1614] p-6 flex items-center justify-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-xl font-bold text-[#4A3933]">
                                            {item.name}
                                        </h3>
                                        <span className="text-xl font-bold text-[#4A3933]">
                                            {item.price}
                                        </span>
                                    </div>
                                    <p className="text-[#6B5B54] text-sm mb-4 leading-relaxed">
                                        {item.description}
                                    </p>
                                    <button className="w-full bg-[#4A3933] text-white py-3 rounded-full font-medium hover:bg-[#3D3833] transition-colors flex items-center justify-center gap-2">
                                        <ShoppingCart className="w-4 h-4" />
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <p className="text-[#6B5B54] text-lg">
                                No items found in this category.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Menu;
