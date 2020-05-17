import React, { useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import "./Menu.css";
import { MenuNav } from "./MenuNav/MenuNav";
import { MenuPosition } from "./MenuPosition/MenuPosition";
import { SpecialOffer } from "./SpecialOffer/SpecialOffer";

export const Menu = withRouter(
  inject("rootStore")(
    observer((props) => {
      const { menuStore } = props.rootStore;
      const currentCategory = menuStore.currentCategory.get();

      const positions = menuStore.getPositionsByCategory(currentCategory);
      const positionEls = positions.map((pos, index) => (
        <CSSTransition
          key={pos.title}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <div className="col-6">
            <MenuPosition position={pos} in />
          </div>
        </CSSTransition>
      ));

      useEffect(() => window.scrollTo(0, 0), []);

      return (
        <div className="container-menu">
          <MenuNav />
          <div className="container pt-3">
            <TransitionGroup className="row w-100 mx-0 pb-4">
              {positionEls}
              {/* <SpecialOffer /> */}
            </TransitionGroup>
          </div>
        </div>
      );
    })
  )
);
