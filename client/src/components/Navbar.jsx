import React, { useState } from 'react';
import { Coffee, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [cartCount] = useState(3); // Example cart count

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Menu', href: '/menu' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'My Orders', href: '/orders' },
        { name: 'Locations', href: '/locations' },
    ];

    return (
        <nav className="bg-gradient-to-r from-amber-50 to-orange-50 border-b border-amber-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                            <Coffee className="w-6 h-6 text-amber-800" strokeWidth={2.5} />
                        </div>
                        <span className="text-xl font-bold text-gray-800">Brew Haven</span>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => setActiveLink(link.name)}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${activeLink === link.name
                                        ? 'text-amber-700'
                                        : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50/50'
                                    }`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Cart Icon */}
                    <div className="hidden md:block">
                        <Button
                            variant="ghost"
                            className="relative hover:bg-amber-100 rounded-lg p-3"
                        >
                            <ShoppingCart className="w-10 h-10 text-gray-700" />
                            {cartCount > 0 && (
                                <Badge
                                    variant="destructive"
                                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-amber-600"
                                >
                                    {cartCount}
                                </Badge>
                            )}
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <div className="md:hidden flex items-center gap-2">
                        {/* Mobile Cart Icon */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="relative hover:bg-amber-100 rounded-lg"
                        >
                            <ShoppingCart className="w-6 h-6 text-gray-700" />
                            {cartCount > 0 && (
                                <Badge
                                    variant="destructive"
                                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-amber-600"
                                >
                                    {cartCount}
                                </Badge>
                            )}
                        </Button>

                        {/* Mobile Menu Button */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="hover:bg-amber-100 rounded-lg"
                                >
                                    <Menu className="w-6 h-6 text-gray-700" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] bg-gradient-to-b from-amber-50 to-orange-50">
                                <div className="flex flex-col gap-4 mt-8">
                                    {navLinks.map((link) => (
                                        <button
                                            key={link.name}
                                            onClick={() => setActiveLink(link.name)}
                                            className={`px-4 py-3 rounded-lg font-medium text-left transition-colors duration-200 ${activeLink === link.name
                                                    ? 'bg-amber-100 text-amber-700'
                                                    : 'text-gray-700 hover:bg-amber-50'
                                                }`}
                                        >
                                            {link.name}
                                        </button>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
