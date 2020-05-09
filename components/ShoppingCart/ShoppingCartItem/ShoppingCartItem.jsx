import React from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import "./ShoppingCartItem.css";

export const ShoppingCartItem = inject("rootStore")(
  observer(props => {
    const {
      position,
      position: {id, photo, title, price},
      quantity
    } = props.savedPos;

    const {addToCart, removeFromCart} = props.rootStore.cartStore;

    return (
      <div className="row my-2">
        <div className="col-4">
          <Link to={`/menu-position/${id}`}>
            <div className="cart-item-image">
              <img src={photo} className="w-100 h-100"/>
            </div>
          </Link>
        </div>
        <div className="col-8 d-flex flex-column justify-content-around">
          <div className="">
            <h4 className="cart-item-title w-100 d-inline-block text-truncate">{title}</h4>
          </div>
          <div className="d-flex justify-content-between">
            <p className="cart-item-price my-2">{`${price} ₽`}</p>
            <div className="w-50 row cart-item-btn-wrapper mx-0 my-2">
              <div className="col-4 d-flex justify-content-center align-items-center cart-item-btn-icon" onClick={() => removeFromCart(position)}>
                <i class="fas fa-minus"></i>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center cart-item-btn-quantity">
              {quantity}
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center cart-item-btn-icon" onClick={() => addToCart(position)}>
                <i class="fas fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  })
)