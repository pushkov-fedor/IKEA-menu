import React from "react";
import { Link } from "react-router-dom";

export function Search() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div className="row">
        <div className="col-9 border-right">Найти</div>
        <div className="col-3">
          <Link to="/">Отменить</Link>
        </div>
      </div>
    </div>
  );
}
