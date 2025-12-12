import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage or empty object
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('brewHavenCart');
      return savedCart ? JSON.parse(savedCart) : {};
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      return {};
    }
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('brewHavenCart', JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart]);

  // Add item to cart or increment quantity
  const addToCart = (item) => {
    setCart(prev => ({
      ...prev,
      [item.id]: {
        ...item,
        quantity: (prev[item.id]?.quantity || 0) + 1
      }
    }));
  };

  // Increment item quantity
  const incrementItem = (itemId) => {
    setCart(prev => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity: prev[itemId].quantity + 1
      }
    }));
  };

  // Decrement item quantity
  const decrementItem = (itemId) => {
    setCart(prev => {
      const currentQuantity = prev[itemId]?.quantity || 0;
      
      if (currentQuantity <= 1) {
        // Remove item if quantity becomes 0
        const { [itemId]: removed, ...rest } = prev;
        return rest;
      }
      
      return {
        ...prev,
        [itemId]: {
          ...prev[itemId],
          quantity: currentQuantity - 1
        }
      };
    });
  };

  // Remove specific item completely
  const removeItem = (itemId) => {
    setCart(prev => {
      const { [itemId]: removed, ...rest } = prev;
      return rest;
    });
  };

  // Get item quantity
  const getItemQuantity = (itemId) => {
    return cart[itemId]?.quantity || 0;
  };

  // Get total cart count
  const getCartCount = () => {
    return Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  };

  // Get cart items as array
  const getCartItems = () => {
    return Object.values(cart);
  };

  // Clear cart
  const clearCart = () => {
    setCart({});
    localStorage.removeItem('brewHavenCart');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        incrementItem,
        decrementItem,
        removeItem,
        getItemQuantity,
        getCartCount,
        getCartItems,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
