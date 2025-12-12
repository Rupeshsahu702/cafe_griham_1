import React, { useState } from 'react';
import { Minus, Plus, Trash2, ArrowRight, ChevronDown } from 'lucide-react';

const Cart = () => {
  const [orderType, setOrderType] = useState('Dine-In');
  const [tableNumber, setTableNumber] = useState('');
  
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Caramel Macchiato',
      size: 'Grande',
      milk: 'Milk',
      option: 'Oat',
      price: 5.75,
      quantity: 1,
      image: '/src/assets/machiato.png'
    },
    {
      id: 2,
      name: 'Almond Croissant',
      option: 'Extra Toasted',
      price: 9.00,
      quantity: 2,
      image: '/src/assets/crossaint.png'
    },
    {
      id: 3,
      name: 'Iced Matcha Latte',
      size: 'Venti',
      milk: 'Milk',
      option: 'Soy',
      price: 6.25,
      quantity: 1,
      image: 'src/assets/matcha.png'
    }
  ]);

  const serviceFee = 1.50;

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subtotal + serviceFee;

  // Update quantity
  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F5EFE0] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#4A3933] mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4"
              >
                {/* Product Image */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#2C2622] to-[#1A1614] rounded-xl flex-shrink-0 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-[#4A3933]">{item.name}</h3>
                  <p className="text-sm text-[#6B5B54]">
                    {item.size && `Size: ${item.size}, `}
                    {item.milk && `${item.milk}: `}
                    {item.option}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-8 h-8 rounded-full bg-[#F5E6D3] text-[#4A3933] flex items-center justify-center hover:bg-[#E8D5C0] transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-lg font-semibold text-[#4A3933] w-8 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-8 h-8 rounded-full bg-[#F5E6D3] text-[#4A3933] flex items-center justify-center hover:bg-[#E8D5C0] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Price */}
                <div className="text-right flex flex-col items-end gap-2">
                  <span className="text-lg font-bold text-[#4A3933]">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-[#6B5B54] hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}

            {cartItems.length === 0 && (
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 text-center">
                <p className="text-[#6B5B54] text-lg">Your cart is empty</p>
              </div>
            )}
          </div>

          {/* Order Summary Section */}
          <div className="lg:col-span-1">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 sticky top-4">
              <h2 className="text-2xl font-bold text-[#4A3933] mb-6">Order Summary</h2>

              {/* Order Type */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-[#4A3933] mb-2">
                  Order Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setOrderType('Dine-In')}
                    className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                      orderType === 'Dine-In'
                        ? 'bg-[#3D3833] text-white'
                        : 'bg-[#F5E6D3] text-[#4A3933] hover:bg-[#E8D5C0]'
                    }`}
                  >
                    Dine-In
                  </button>
                  <button
                    onClick={() => setOrderType('Takeaway')}
                    className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                      orderType === 'Takeaway'
                        ? 'bg-[#3D3833] text-white'
                        : 'bg-[#F5E6D3] text-[#4A3933] hover:bg-[#E8D5C0]'
                    }`}
                  >
                    Takeaway
                  </button>
                </div>
              </div>

              {/* Table Number */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-[#4A3933] mb-2">
                  Table Number
                </label>
                <div className="relative">
                  <select
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F5E6D3] text-[#4A3933] rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#4A3933]"
                  >
                    <option value="">Select your table</option>
                    <option value="1">Table 1</option>
                    <option value="2">Table 2</option>
                    <option value="3">Table 3</option>
                    <option value="4">Table 4</option>
                    <option value="5">Table 5</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4A3933] pointer-events-none" />
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b border-[#D4C5B9]">
                <div className="flex justify-between text-[#6B5B54]">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[#6B5B54]">
                  <span>Service Fee</span>
                  <span>${serviceFee.toFixed(2)}</span>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6">
                <span className="text-xl font-bold text-[#4A3933]">Total</span>
                <span className="text-2xl font-bold text-[#4A3933]">
                  ${total.toFixed(2)}
                </span>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-[#3D3833] text-white py-4 rounded-full font-semibold hover:bg-[#2C2622] transition-colors flex items-center justify-center gap-2">
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
