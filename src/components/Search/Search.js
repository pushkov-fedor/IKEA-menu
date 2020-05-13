import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
import { Link } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { SearchPositionCard } from "./SearchPositionCard";
import "./Search.css";

const textStyle = {
  color: "rgba(0,0,0,.8)",
  textDecoration: "none",
  fontSize: "18px",
};

export const Search = inject("rootStore")(
  observer((props) => {
    const { menuStore } = props.rootStore;
    const [searchQuery, setSearchQuery] = useState("");
    const positions = menuStore.getPositionsByQuery(searchQuery);
    const positionEls = positions.map(({ id, photo, title, price }) => (
      <CSSTransition
        key={id}
        timeout={400}
        classNames="fadeRight"
        unmountOnExit
      >
        <SearchPositionCard id={id} photo={photo} title={title} price={price} />
      </CSSTransition>
    ));
    useEffect(() => window.scrollTo(0, 0), []);

    return (
      <div style={{ width: "100vw", height: "100vh" }}>
        <div
          className="row w-100 py-2 mx-0"
          style={{
            height: "65px",
            backgroundColor: "#FFD83C",
            boxShadow: "0 4px 4px rgba(0,0,0,.1)",
          }}
        >
          <div className="col-8 px-0 d-flex justify-content-center align-items-center">
            <input
              className="border-0 px-3 py-1 "
              type="text"
              placeholder="Найти"
              style={{
                ...textStyle,
                borderRadius: "10px",
                height: "42px",
                width: "90%",
              }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="col-4 px-0 d-flex justify-content-center align-items-center">
            <Link
              to="/"
              style={{
                ...textStyle,
                fontSize: "16px",
                width: "90%",
                height: "42px",
                borderLeft: "1px solid rgba(0,0,0,.4)",
              }}
              className="d-flex align-items-center justify-content-center"
            >
              Отменить
            </Link>
          </div>
        </div>
        <TransitionGroup className="d-flex flex-column align-items-center my-2">
          {positionEls}
        </TransitionGroup>
      </div>
    );
  })
);
