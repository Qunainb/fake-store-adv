import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product, id) {
    const newItem = { ...product, amount: 1 };

    // Checking if item already exists
    const cartItem = cart.find((item) => item.id === id);

    // If cartItem exists
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  }

  function removeFromCart(id) {
    const newCart = cart.filter((item) => item.id !== id);

    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  function increaseAmount(id) {
    const item = cart.find((item) => item.id === id);
    addToCart(item, id);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}
