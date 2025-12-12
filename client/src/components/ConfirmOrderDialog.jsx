import React from 'react';
import { X, Coffee } from 'lucide-react';

const ConfirmOrderDialog = ({ isOpen, onClose, onConfirm, cartItems, subtotal, tax, total }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 relative animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Coffee className="w-6 h-6 text-[#D4A574]" />
            <h2 className="text-2xl font-bold text-[#4A3933]">Confirm Your Order</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Description */}
        <p className="text-[#6B5B54] text-sm mb-6">
          Please review your items below. Once confirmed, we'll start brewing your order immediately!
        </p>

        {/* Order Items */}
        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#2C2622] to-[#1A1614] rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-[#4A3933]">{item.name}</h3>
                <p className="text-sm text-[#6B5B54]">
                  {item.category}
                </p>
                <p className="text-sm text-[#6B5B54]">Qty: {item.quantity}</p>
              </div>
              <div className="text-[#4A3933] font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="space-y-2 mb-6 pb-6 border-b border-gray-200">
          <div className="flex justify-between text-[#6B5B54]">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-[#6B5B54]">
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-bold text-[#4A3933]">Total</span>
          <span className="text-2xl font-bold text-[#D4A574]">${total.toFixed(2)}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 px-6 bg-white border-2 border-gray-300 text-[#4A3933] rounded-full font-semibold hover:bg-gray-50 transition-colors"
          >
            No, Go Back
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 px-6 bg-[#D4A574] text-white rounded-full font-semibold hover:bg-[#C19A6B] transition-colors flex items-center justify-center gap-2"
          >
            Yes, Place Order
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrderDialog;
