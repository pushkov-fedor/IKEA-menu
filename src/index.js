import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { render } from "react-dom";
import "./style.css";
import { rootStore } from "./Store/RootStore";
import { inject, observer } from "mobx-react";
import { Provider } from "mobx-react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import { SearchBar } from "./components/SearchBar/SearchBar";
import { Menu } from "./components/Menu/Menu";
import { MenuPositionDetail } from "./components/MenuPositionDetail/MenuPositionDetail";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { Search } from "./components/Search/Search";

const App = inject("rootStore")(
  observer((props) => {
    const location = useLocation();
    return (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fadeNav"
          timeout={{ enter: 250, exit: 150 }}
        >
          <Switch location={location}>
            <Route exact path="/">
              <div className="container-main position-relative">
                <SearchBar />
                <Menu />
              </div>
            </Route>
            <Route
              path="/menu-position/:id"
              children={<MenuPositionDetail />}
            ></Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/shopping-cart">
              <ShoppingCart />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  })
);

render(
  <Provider rootStore={rootStore}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
