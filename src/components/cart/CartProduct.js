import React from "react";
import "./CartProduct.css";

function CartProduct({ title, image, price, rating, remove }) {
  return (
    <div className="CartProduct">
      <img className="CartProduct__image" src={image} alt="" />
      <div className="CartProduct__info">
        <h5 className="CartProduct__infoTitle">{title}</h5>
        <p className="CartProduct__infoPrice">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="CartProduct__infoRating">{rating}</div>
        <button onClick={remove} className="CartProduct__infoButton">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CartProduct;
