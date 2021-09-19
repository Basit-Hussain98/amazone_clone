import React from "react";
import "./NavOption.css";

function NavOption({ optionOne, optionTwo }) {
  return (
    <>
      <span className="header__optionLineOne">{optionOne}</span>
      <span className="header__optionLineTwo">{optionTwo}</span>
    </>
  );
}

export default NavOption;
