import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { rootStore } from './Store/RootStore';
import { inject, observer } from "mobx-react";
import { Provider } from "mobx-react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {SearchBar} from "./components/SearchBar/SearchBar";
import {Menu} from "./components/Menu/Menu";
import {MenuPositionDetail} from "./components/MenuPositionDetail/MenuPositionDetail";
import {ShoppingCart} from "./components/ShoppingCart/ShoppingCart";

const App = inject("rootStore")(
  observer(props => {

    const mainMenuScreenLinks = props.rootStore.menuStore.menuNavs;
    const mainScreens = mainMenuScreenLinks.map(navItem => (
      <Route exact path={navItem.link}>
        <div className="container-main position-relative">
          <SearchBar/>
          <Menu/>
        </div>
      </Route>
    ))

    return (
      <Router>
        <Switch>
          {mainScreens}
          <Route path="/menu-position/:id" children=    {<MenuPositionDetail/>}>
          </Route>
          <Route path="/shopping-cart">
            <ShoppingCart/>
          </Route>
        </Switch>
      </Router>
    )
  })
)
render(<Provider rootStore={rootStore}><App /></Provider>, document.getElementById('root'));
