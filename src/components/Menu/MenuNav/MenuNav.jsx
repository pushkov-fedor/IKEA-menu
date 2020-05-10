import React from "react";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { NavLink } from "react-router-dom";
import ScrollContainer from "react-indiana-drag-scroll";
import "./MenuNav.css";

export const MenuNav = inject("rootStore")(
  observer((props) => {
    const { menuStore } = props.rootStore;
    const menuNavs = toJS(menuStore.menuNavs);
    const current = menuStore.currentCategory.get();

    const menuEls = menuNavs.map((category) => (
      <li className="px-2" key={category}>
        <div
          className={
            category === current ? "menu-link menu-link-active" : "menu-link"
          }
          onClick={() => menuStore.setCurrentCategory(category)}
        >
          {category}
        </div>
      </li>
    ));

    return (
      <ScrollContainer className="pt-4 pl-5 pr-0">
        <ul className="d-flex list-unstyled">{menuEls}</ul>
      </ScrollContainer>
    );
  })
);
