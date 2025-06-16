import { createContext, useEffect, useState } from "react";
import CartItem from "../Components/CartItem";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((accumlator, currentItem) => {
      return accumlator + currentItem.price * currentItem.amount;
    }, 0);

    setTotal(total);
  }, [cart]);

  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumlator, currentItem) => {
        return accumlator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

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
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  }

  function decreaseAmount(id) {
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });

      setCart(newCart);
    }

    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
