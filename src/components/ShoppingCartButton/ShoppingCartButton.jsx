import React from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import "./ShoppingCartButton.css";

export const ShoppingCartButton = inject("rootStore")(
  observer((props) => {
    return (
      <Link to="/shopping-cart" className="cart-btn-link">
        <div className="shopping-cart-button d-flex align-items-center justify-content-center">
          <i className="far fa-bookmark cart-icon"></i>
        </div>
      </Link>
    );
  })
);
