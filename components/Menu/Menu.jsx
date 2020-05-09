import React from "react";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import "./Menu.css";
import { MenuNav } from "./MenuNav/MenuNav";
import { MenuPosition } from "./MenuPosition/MenuPosition";
import { SpecialOffer } from "./SpecialOffer/SpecialOffer";

export const Menu = withRouter(inject("rootStore")(
  observer((props) => {
    const currentPath = props.history.location.pathname;
    const getPositionsByPath = props.rootStore.menuStore.getPositionsByPath;

    const positions = getPositionsByPath(currentPath);
    const positionEls = positions.map(pos => 
      <div className="col-6">
        <MenuPosition position={pos}/>
      </div>
    );

    return (
      <div className="container-menu">
        <MenuNav/>
        <div className="container pt-3">
          <div className="row w-100 mx-0 pb-4">
            {positionEls}
            <SpecialOffer/>
          </div>
        </div>
      </div>
    );
  })
));