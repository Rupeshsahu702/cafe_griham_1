import React from 'react';
import { Coffee, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderSuccessDialog = ({ isOpen, onClose, onCheckOrder, orderNumber }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-8 relative animate-fadeIn text-center">
        {/* Coffee Icon */}
        <div className="w-24 h-24 mx-auto mb-6 bg-[#F5E6D3] rounded-2xl flex items-center justify-center">
          <Coffee className="w-12 h-12 text-[#D4A574]" />
        </div>

        {/* Check Icon */}
        <div className="mb-6">
          <CheckCircle className="w-16 h-16 mx-auto text-[#5A9F6C]" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-[#4A3933] mb-4">
          Your order is placed!
        </h2>

        {/* Description */}
        <p className="text-[#6B5B54] mb-6 leading-relaxed">
          Thanks for choosing Brew Haven! We're brewing it to perfection. Your delicious handcrafted drinks are being prepared.
        </p>

        {/* Order Number */}
        <div className="inline-block bg-[#F5EFE0] px-6 py-3 rounded-full mb-6">
          <span className="text-[#6B5B54] font-medium">
            Order #{orderNumber}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
            <Link to='/order'>
          <button
            onClick={onCheckOrder}
            className="w-full py-4 bg-[#D4A574] text-white rounded-full font-semibold hover:bg-[#C19A6B] transition-colors flex items-center justify-center gap-2"
            >
            Check Order
            <ArrowRight className="w-5 h-5" />
          </button>
              </Link>
          <button
            onClick={onClose}
            className="w-full py-3 text-[#6B5B54] font-medium hover:text-[#4A3933] transition-colors"
          >
            Continue Shopping
          </button>
        </div>

        {/* Footer Text */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-[#D4A574] text-sm flex items-center justify-center gap-2">
            <Coffee className="w-4 h-4" />
            Brewed to Perfection. Served with Love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessDialog;
