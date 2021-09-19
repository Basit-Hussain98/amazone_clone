import React, { useContext } from "react";
import "./Header.css";
import Logo from "../../images/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import NavOption from "./NavOption";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { CartContext } from "../../context/CartContext";

function Header() {
  const { basketCount } = useContext(CartContext);
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="logo" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__input" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link className="header__link" to="/login">
          <div className="header__options">
            <NavOption optionOne="Hello," optionTwo="Sign In" />
          </div>
        </Link>
        <Link className="header__link">
          <div className="header__options">
            <NavOption optionOne="Returns" optionTwo="& Orders" />
          </div>
        </Link>
        <Link className="header__link">
          <div className="header__options">
            <NavOption optionOne="Your" optionTwo="Prime" />
          </div>
        </Link>
        <Link className="header__link" to="/checkout">
          <div className="header__checkout header__options">
            <ShoppingBasketIcon className="header__basketIcon" />
            <span className="header__basketCount">{basketCount}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
