import React, { createContext, useState } from "react";
export const CartContext = createContext();

export function CartContextProvider(props) {
  const [basketCount, setBasketCount] = useState(0);
  const [cartProduct, setCartProduct] = useState([]);

  function addToCart(product) {
    setBasketCount(basketCount + 1);
    setCartProduct((prevState) => {
      return [...prevState, product];
    });
  }

  function removeFromCart(index) {
    setBasketCount(basketCount - 1);
    const newBasketList = [...cartProduct];
    newBasketList.splice(index, 1);
    setCartProduct(newBasketList);
  }

  return (
    <div>
      <CartContext.Provider
        value={{
          basketCount,
          addToCart,
          cartProduct,
          removeFromCart,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </div>
  );
}
