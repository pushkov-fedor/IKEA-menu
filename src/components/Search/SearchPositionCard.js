import React from "react";
import { Link } from "react-router-dom";

export function SearchPositionCard(props) {
  const { id, photo, title, price } = props;
  return (
    <Link
      to={`/menu-position/${id}`}
      className="w-100 d-flex justify-content-center my-1 menu-position-link-container"
    >
      <div className="row" style={{ height: "100px", width: "90%" }}>
        <div className="col-3 d-flex align-items-center justify-content-center px-0">
          <img
            src={photo}
            alt={title}
            style={{
              height: "85px",
              width: "85px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 3px 8px rgba(0,0,0,.15)",
            }}
          />
        </div>
        <div className="col-9 d-flex justify-content-start align-items-center">
          <div className="row" style={{ color: "rgba(0,0,0,.8)" }}>
            <div
              className="col-12"
              style={{ fontWeight: 300, fontSize: "21px" }}
            >
              {title}
            </div>
            <div
              className="col-12"
              style={{ fontWeight: "bold", fontSize: "18px" }}
            >
              {price} ₽
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
