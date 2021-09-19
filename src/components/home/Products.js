import React, { useContext } from "react";
import "./product.css";
import { CartContext } from "../../context/CartContext";
function Products({ title, price, ratings, image }) {
  const { addToCart } = useContext(CartContext);
  let product = {
    title: title,
    price: price,
    image: image,
    rating: ratings,
  };
  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <span className="product__ratings">
          {Array(ratings)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </span>
      </div>
      <img className="product__image" src={image} alt="" />
      <button
        onClick={() => {
          addToCart(product);
        }}
        className="product__button"
      >
        Add to Basket
      </button>
    </div>
  );
}

export default Products;
