import React from 'react';
import { ShoppingCart, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="bg-[#F5EFE0] border-b border-[#D4C5B9] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-[#4A3933]">
              Brew Haven Café
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to='/' className="text-[#4A3933] hover:text-[#D4A574] transition-colors">
              Home
            </Link>
            <Link to='/menu'  className="text-[#4A3933] hover:text-[#D4A574] transition-colors">
              Menu
            </Link>
            <Link to='/about'  className="text-[#4A3933] hover:text-[#D4A574] transition-colors">
              About
            </Link>
            <Link to='/contact'  className="text-[#4A3933] hover:text-[#D4A574] transition-colors">
              Contact
            </Link>
          </div>

          {/* Cart and Profile */}
          <div className="flex items-center gap-4">
            {/* Cart Icon with Badge */}
            <Link to='/cart' >
            <button className="relative">
              <div className="w-10 h-10 rounded-full bg-[#4A3933] flex items-center justify-center hover:bg-[#3D3833] transition-colors">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D4A574] text-white text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
              </Link>

            {/* Profile Icon */}
            <button className="w-10 h-10 rounded-full bg-[#4A3933] flex items-center justify-center hover:bg-[#3D3833] transition-colors">
              <User className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
