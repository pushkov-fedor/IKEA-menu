import React from "react";
import { inject, observer } from "mobx-react";
import "./SearchBar.css";
import {ShoppingCartButton} from "../ShoppingCartButton/ShoppingCartButton";

export const SearchBar = inject("rootStore")(
  observer(
    () => {
      return (
        <div className="container searchbar-container d-flex align-items-center">
          <form className="d-flex align-items-center searchbar w-75 px-2 mx-3">
            <button type="submit" className="search-icon mr-1"> 
              <i class="fas fa-search"></i>
            </button>
            <input className="searchbar-input ml-1 py-2 w-100" type="text" placeholder="Введите название блюда"/>
          </form>
          <ShoppingCartButton/>
        </div>
      );
    }
  )
)