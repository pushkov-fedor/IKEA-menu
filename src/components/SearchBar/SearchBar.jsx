import React from "react";
import { useHistory } from "react-router-dom";
import { inject, observer } from "mobx-react";
import "./SearchBar.css";
import { ShoppingCartButton } from "../ShoppingCartButton/ShoppingCartButton";

export const SearchBar = inject("rootStore")(
  observer(() => {
    const history = useHistory();
    return (
      <div className="container searchbar-container d-flex align-items-center position-relative">
        <div
          className="d-flex align-items-center searchbar w-75 px-2 mx-3 position-relative"
          onClick={() => history.push("/search")}
        >
          <div className="search-icon mr-1">
            <i className="fas fa-search"></i>
          </div>
          <input
            className="searchbar-input ml-1 py-2 w-100"
            type="text"
            placeholder="Найти в меню"
            disabled
          />
        </div>
        <ShoppingCartButton />
      </div>
    );
  })
);
