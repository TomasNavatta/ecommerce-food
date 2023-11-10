import React, { createContext, useState, useEffect } from "react";

export const cartContext = createContext();

export default function CartProvider({ children }) {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(storedCart);
  

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addProduct = (product) => {
    const inCart = cart.find((productInCart) => productInCart.id === product.id);
    if (inCart) {
      setCart(
        cart.map((productInCart) =>
          productInCart.id === product.id
            ? { ...inCart, quantity: inCart.amount + 1 }
            : productInCart
        )
      );
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const addItemToCart = (product) => {
    const inCart = cart.find((productInCart) => productInCart.id === product.id);
  
    if (inCart) {
      const newAmount = inCart.amount + 1;
  
      if (newAmount <= inCart.stock) {
        setCart(
          cart.map((productInCart) => {
            if (productInCart.id === product.id) {
              return { ...inCart, amount: newAmount };
            } else {
              return productInCart;
            }
          })
        );
      }
    } else {
      if (product.amount < product.stock) {
        setCart([...cart, { ...product, amount: 1 }]);
      }
    }
  };

  const deleteItemToCart = (product) => {
    const inCart = cart.find((productInCart) => productInCart.id === product.id);
    if (inCart) {
      if (inCart.amount === 1) {
        setCart(cart.filter((productInCart) => productInCart.id !== product.id));
      } else {
        setCart(
          cart.map((productInCart) => {
            if (productInCart.id === product.id) {
              return { ...inCart, amount: inCart.amount - 1 };
            } else {
              return productInCart;
            }
          })
        );
      }
    }
  };

  return (
    <cartContext.Provider value={{ cart, addProduct, clearCart, addItemToCart, deleteItemToCart }}>
      {children}
    </cartContext.Provider>
  );
}
