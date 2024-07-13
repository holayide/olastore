import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // update total
  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return (
        accumulator +
        currentItem.current_price[0]?.NGN?.[0] * currentItem.amount
      );
    }, 0);
    setTotal(total);
  }, [cart]);

  // update item amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((accumulator, currentItem) => {
        return accumulator + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [cart]);

  //   add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    // already in cart
    const cartItem = cart.find((item) => item.id === id);

    // console.log(cartItem);
    if (cartItem) {
      const newCart = cart.map((item) => {
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
  };

  // Remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  //   Clear cart
  const clearCart = () => {
    setCart([]);
  };

  //   Increase amount
  const increaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    addToCart(item.id);
    if (item) {
      addToCart(item, id);
    }
  };

  //   Decrease amount
  const decreaseAmount = (id) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      if (item.amount > 1) {
        const newCart = cart.map((cartItem) => {
          if (cartItem.id === id) {
            return { ...cartItem, amount: cartItem.amount - 1 };
          } else {
            return cartItem;
          }
        });
        setCart(newCart);
      } else {
        removeFromCart(id);
      }
    }
  };

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
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
