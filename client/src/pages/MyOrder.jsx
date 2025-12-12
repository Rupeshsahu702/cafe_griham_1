import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import { useOrders } from '../context/OrderContext';
import { useNavigate } from 'react-router-dom';

const MyOrder = () => {
  const [activeTab, setActiveTab] = useState('All');
  const { orders, getOrdersByStatus } = useOrders();
  const navigate = useNavigate();

  const tabs = ['All', 'Preparing', 'Served', 'Completed', 'Cancelled'];

  // Filter orders based on active tab
  const filteredOrders = getOrdersByStatus(activeTab);

  // Status badge styling
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Preparing':
        return 'bg-[#FFF3CD] text-[#D4A574]';
      case 'Served':
        return 'bg-[#D4EDDA] text-[#5A9F6C]';
      case 'Completed':
        return 'bg-[#E2E3E5] text-[#6C757D]';
      case 'Cancelled':
        return 'bg-[#F8D7DA] text-[#C76E73]';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-[#F5EFE0] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-[#4A3933] mb-6">My Orders</h1>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeTab === tab
                  ? 'bg-[#D4A574] text-white shadow-md'
                  : 'bg-white/60 text-[#4A3933] hover:bg-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Orders Table or Empty State */}
        {filteredOrders.length > 0 ? (
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#D4C5B9]">
                    <th className="text-left py-4 px-6 text-sm font-semibold text-[#4A3933]">
                      Order ID
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-[#4A3933]">
                      Date & Time
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-[#4A3933]">
                      Items
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-[#4A3933]">
                      Service
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-[#4A3933]">
                      Total
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-[#4A3933]">
                      Status
                    </th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-[#4A3933]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order, index) => (
                    <tr
                      key={order.id}
                      className={`${
                        index !== filteredOrders.length - 1 ? 'border-b border-[#D4C5B9]' : ''
                      } hover:bg-white/40 transition-colors`}
                    >
                      <td className="py-4 px-6 text-sm text-[#6B5B54] font-medium">
                        #{order.orderNumber}
                      </td>
                      <td className="py-4 px-6 text-sm text-[#6B5B54]">
                        {order.dateTime}
                      </td>
                      <td className="py-4 px-6 text-sm text-[#6B5B54]">
                        {order.items}
                      </td>
                      <td className="py-4 px-6 text-sm text-[#6B5B54]">
                        {order.service}
                      </td>
                      <td className="py-4 px-6 text-sm text-[#4A3933] font-semibold">
                        {order.total}
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                            order.status
                          )}`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <button className="text-sm text-[#4A3933] font-medium hover:text-[#D4A574] transition-colors">
                          View Bill
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl py-16 px-6 text-center">
            <div className="max-w-md mx-auto">
              {/* Icon Circle */}
              <div className="w-32 h-32 mx-auto mb-6 bg-[#F5E6D3] rounded-full flex items-center justify-center">
                <FileText className="w-16 h-16 text-[#D4A574]" />
              </div>

              {/* Text */}
              <h2 className="text-2xl font-bold text-[#4A3933] mb-3">
                No Orders Yet
              </h2>
              <p className="text-[#6B5B54] mb-6">
                You haven't placed any orders yet. Check out our menu to get started.
              </p>

              {/* Button */}
              <button 
                onClick={() => navigate('/menu')}
                className="px-8 py-3 bg-[#D4A574] text-white rounded-full font-semibold hover:bg-[#C19A6B] transition-colors"
              >
                View Menu
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
