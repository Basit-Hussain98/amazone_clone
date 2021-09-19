import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartProduct from "../components/cart/CartProduct";
function Cart() {
  const { cartProduct, removeFromCart, basketCount } = useContext(CartContext);
  return (
    <div style={{ background: "white" }}>
      <h2 style={{ margin: "10px 10px" }}>
        {basketCount === 0
          ? "Your Shopping Basket is empty"
          : "Your Shopping Basket"}
      </h2>
      <hr style={{ marginBottom: "30px" }} />

      {cartProduct.map((p, index) => {
        return (
          <CartProduct
            key={p.title}
            title={p.title}
            image={p.image}
            price={p.price}
            remove={() => removeFromCart(index)}
            rating={Array(p.rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          />
        );
      })}
    </div>
  );
}

export default Cart;
