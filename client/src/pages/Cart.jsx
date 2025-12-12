import React, { useState } from 'react';
import { Minus, Plus, Trash2, ArrowRight, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';
import ConfirmOrderDialog from '@/components/ConfirmOrderDialog';
import OrderSuccessDialog from '@/components/OrderSuccessDialog';

const Cart = () => {
  const [orderType, setOrderType] = useState('Dine-In');
  const [tableNumber, setTableNumber] = useState('');
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  
  const { incrementItem, decrementItem, removeItem, getCartItems, clearCart } = useCart();
  const { addOrder } = useOrders();
  
  const serviceFee = 1.50;
  const cartItems = getCartItems();

  // Calculate prices
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + serviceFee + tax;

  // Generate random order number
  const generateOrderNumber = () => {
    return 'BH-' + Math.floor(1000 + Math.random() * 9000);
  };

  // Handle checkout click
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      setShowConfirmDialog(true);
    }
  };

  // Handle confirm order
  const handleConfirmOrder = () => {
    const newOrderNumber = generateOrderNumber();
    
    // Create order data
    const orderData = {
      orderNumber: newOrderNumber,
      items: cartItems,
      orderType: orderType,
      tableNumber: tableNumber,
      subtotal: subtotal,
      serviceFee: serviceFee,
      tax: tax,
      total: total
    };

    // Add order to order history
    addOrder(orderData);
    
    setOrderNumber(newOrderNumber);
    setShowConfirmDialog(false);
    setShowSuccessDialog(true);
    clearCart(); // Clear cart after order is placed
  };

  return (
    <>
      <div className="min-h-screen bg-[#F5EFE0] py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-[#4A3933] mb-8">Your Cart</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Cart Items Section */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
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
                        {item.category}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decrementItem(item.id)}
                        className="w-8 h-8 rounded-full bg-[#F5E6D3] text-[#4A3933] flex items-center justify-center hover:bg-[#E8D5C0] transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-lg font-semibold text-[#4A3933] w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => incrementItem(item.id)}
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
                ))
              ) : (
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 text-center">
                  <p className="text-[#6B5B54] text-lg">Your cart is empty</p>
                  <p className="text-[#6B5B54] text-sm mt-2">Add some items from the menu to get started</p>
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
                {orderType === 'Dine-In' && (
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
                )}

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
                  <div className="flex justify-between text-[#6B5B54]">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
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
                <button 
                  onClick={handleCheckout}
                  disabled={cartItems.length === 0}
                  className={`w-full py-4 rounded-full font-semibold transition-colors flex items-center justify-center gap-2 ${
                    cartItems.length === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-[#3D3833] text-white hover:bg-[#2C2622]'
                  }`}
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dialogs */}
      <ConfirmOrderDialog
        isOpen={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
        onConfirm={handleConfirmOrder}
        cartItems={cartItems}
        subtotal={subtotal}
        tax={tax}
        total={total}
      />

      <OrderSuccessDialog
        isOpen={showSuccessDialog}
        onClose={() => setShowSuccessDialog(false)}
        orderNumber={orderNumber}
      />
    </>
  );
};

export default Cart;
