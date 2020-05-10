import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import "./MenuPosition.css";

export const MenuPosition = inject("rootStore")(
  observer((props) => {
    const { id, price, title, photo } = props.position;

    return (
      <Link
        to={`/menu-position/${id}`}
        className="menu-position-link-container"
      >
        <div
          className="position-relative"
          key={id}
          style={{ transition: "all .5s" }}
        >
          <div className="square">
            <img className="w-100 h-100" src={photo} />
          </div>
          <p className="price-badge px-2 font-weight-bold">{price} ₽</p>
          <p className="text-center position-title p-2 mb-1">{title}</p>
        </div>
      </Link>
    );
  })
);
