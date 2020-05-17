import React from "react";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import "./ShoppingCart.css";
import { ShoppingCartItem } from "./ShoppingCartItem/ShoppingCartItem";

export const ShoppingCart = withRouter(
  inject("rootStore")(
    observer((props) => {
      const saved = toJS(props.rootStore.cartStore.saved);
      const totalPrice = props.rootStore.cartStore.totalPrice;

      const goBack = () => {
        props.history.goBack();
      };

      const savedEls = saved.map((pos) => <ShoppingCartItem savedPos={pos} />);
      const totalPriceEl =
        totalPrice == 0 ? (
          ""
        ) : (
          <div className="d-flex justify-content-between mt-3 cart-total-price-container">
            <p>Итого:</p>
            <p className="cart-total-price">{`${totalPrice} ₽`}</p>
          </div>
        );

      return (
        <div className="position-relative cart-wrapper">
          <div className="position-absolute cart-bg">
            <div className="cart-button-back pl-4" onClick={goBack}>
              <i class="fas fa-chevron-left"></i>
            </div>
            <div className="position-absolute cart-main-container">
              <div className="container">
                <h2 className="cart-title pt-3">Ваша корзина</h2>
                <h3 className="cart-position-number mb-3">
                  {savedEls.length > 0
                    ? `${saved.length} блюда`
                    : "Здесь пока ничего нет :("}
                </h3>
                {savedEls.length > 0 && (
                  <div className="cart-position-container d-flex flex-column py-3">
                    {savedEls}
                  </div>
                )}
                {totalPriceEl}
              </div>
            </div>
          </div>
        </div>
      );
    })
  )
);
