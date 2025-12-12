import React, { createContext, useContext, useState, useEffect } from 'react';

const OrderContext = createContext();

export const useOrders = () => {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error('useOrders must be used within an OrderProvider');
  }
  return context;
};

export const OrderProvider = ({ children }) => {
  // Initialize orders from localStorage
  const [orders, setOrders] = useState(() => {
    try {
      const savedOrders = localStorage.getItem('brewHavenOrders');
      return savedOrders ? JSON.parse(savedOrders) : [];
    } catch (error) {
      console.error('Error loading orders from localStorage:', error);
      return [];
    }
  });

  // Save orders to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem('brewHavenOrders', JSON.stringify(orders));
    } catch (error) {
      console.error('Error saving orders to localStorage:', error);
    }
  }, [orders]);

  // Add new order
  const addOrder = (orderData) => {
    const newOrder = {
      id: orderData.orderNumber,
      orderNumber: orderData.orderNumber,
      dateTime: new Date().toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }),
      items: orderData.items.map(item => `${item.quantity}x ${item.name}`).join(', '),
      service: orderData.orderType === 'Dine-In' ? `Table ${orderData.tableNumber}` : 'Takeaway',
      total: `$${orderData.total.toFixed(2)}`,
      status: 'Preparing',
      itemsArray: orderData.items, // Keep full item details
      orderType: orderData.orderType,
      tableNumber: orderData.tableNumber
    };

    setOrders(prev => [newOrder, ...prev]); // Add to beginning of array
    return newOrder;
  };

  // Update order status
  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  // Get orders by status
  const getOrdersByStatus = (status) => {
    if (status === 'All') return orders;
    return orders.filter(order => order.status === status);
  };

  // Clear all orders
  const clearOrders = () => {
    setOrders([]);
    localStorage.removeItem('brewHavenOrders');
  };

  return (
    <OrderContext.Provider
      value={{
        orders,
        addOrder,
        updateOrderStatus,
        getOrdersByStatus,
        clearOrders
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
