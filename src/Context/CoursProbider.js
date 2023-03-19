import React, { createContext, useEffect, useState } from 'react';


export  const CoursContext=createContext([])
const CoursProbider = ({children}) => {

const [cart, setCart] = useState([]);


const addToCart = (product) => {
  const existingProductIndex = cart.findIndex((p) => p.id === product.id);
  if (existingProductIndex >= 0) {
    const updatedCart = [...cart];
    updatedCart[existingProductIndex].quantity += 1;
    setCart(updatedCart);
  } else {
    setCart([...cart, { ...product, quantity: 1 }]);
  }
};

const removeFromCart = (product) => {
  const updatedCart = [...cart];
  const productIndex = updatedCart.findIndex((p) => p.id === product.id);
  if (productIndex >= 0) {
    if (updatedCart[productIndex].quantity > 1) {
      updatedCart[productIndex].quantity -= 1;
    } else {
      updatedCart.splice(productIndex, 1);
    }
    setCart(updatedCart);
  }
};

const clearCart = () => {
  setCart([]);
};

const saveCartToLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

useEffect(() => {
  saveCartToLocalStorage();
}, [cart]);

useEffect(() => {
  const cartData = localStorage.getItem("cart");
  if (cartData) {
    setCart(JSON.parse(cartData));
  }
}, []);


  return (
    <CoursContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CoursContext.Provider>
  );
};

export default CoursProbider;