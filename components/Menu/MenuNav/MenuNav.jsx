import React from "react";
import { toJS } from "mobx"; 
import { inject, observer } from "mobx-react";
import { NavLink } from "react-router-dom";
import ScrollContainer from 'react-indiana-drag-scroll';
import "./MenuNav.css";


export const MenuNav = inject("rootStore")(
  observer((props) => {
    const menuNavs = toJS(props.rootStore.menuStore.menuNavs);

    const menuEls = menuNavs.map((nav, index) => (
      <li className="px-2" key={nav.title}>
        <NavLink exact to={nav.link} activeClassName="menu-link-active" className="menu-link">{nav.title}</NavLink>
      </li>
    ));

    return (
      <ScrollContainer className="pt-4 pl-5 pr-0">
        <ul className="d-flex list-unstyled">
          {menuEls}
        </ul>
      </ScrollContainer>
    )
  })
)