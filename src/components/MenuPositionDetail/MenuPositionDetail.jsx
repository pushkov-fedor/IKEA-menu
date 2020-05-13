import React, { useEffect } from "react";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { useParams, Link, withRouter } from "react-router-dom";
import { ShoppingCartButton } from "../ShoppingCartButton/ShoppingCartButton";
import "./MenuPositionDetail.css";

export const MenuPositionDetail = withRouter(
  inject("rootStore")(
    observer((props) => {
      let { id } = useParams();
      const getPositionById = props.rootStore.menuStore.getPositionById;
      const addToCart = props.rootStore.cartStore.addToCart;
      const { quantity = 0 } =
        toJS(props.rootStore.cartStore.saved).find(
          (item) => item.position.id == id
        ) || {};

      const position = getPositionById(id);
      const {
        price = 0,
        photo = "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
        title = "Название блюда",
        description = "Описание блюда",
        includes = "Какие аллергены содержит",
        calories = 0,
        consistOf = "Из чего состоит",
        proteins = 0,
        fats = 0,
        carbohydrates = 0,
      } = position || {};

      const goBack = () => {
        props.history.goBack();
      };

      useEffect(() => window.scrollTo(0, 0), []);

      return (
        <div className="position-relative position-detail-wrapper">
          <div className="position-detail-button-back" onClick={goBack}>
            <i class="fas fa-chevron-left"></i>
          </div>
          <div className="position-detail-cart-button">
            <ShoppingCartButton />
          </div>
          <div className="container">
            <div className="p-5">
              <div className="w-100 mt-1">
                <div className="position-detail-image-container">
                  <img src={photo} className="h-100 w-100" />
                </div>
                <h2 className="text-center position-detail-title mt-3 mb-2">
                  {title}
                </h2>
                <p className="position-detail-description mb-1">
                  {description}
                </p>
                <h2 className="position-detail-price">{price} ₽</h2>
                <div className="position-detail-collapse-wrapper mt-2">
                  <div>
                    <button
                      className="position-detail-collapse-button py-2"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Подробнее
                    </button>
                  </div>
                  <div
                    className="collapse pb-3 position-detail-collapse-content"
                    id="collapseExample"
                  >
                    <div className="row mx-2">
                      <div className="col-7">
                        <p className="position-detail-collapse-content-text">
                          <span className="position-detail-span-bold">
                            Содержит:
                          </span>
                          <br />
                          {includes}
                        </p>
                      </div>
                      <div className="col-5">
                        <p className="position-detail-collapse-content-text text-center">
                          <span className="position-detail-span-bold">
                            Калорий
                          </span>
                          <br />
                          <span className="position-detail-calories">
                            {calories}
                          </span>
                        </p>
                      </div>
                    </div>
                    <p className="px-4 font-weight-light mb-1">
                      <span className="font-weight-normal">Состав:</span>{" "}
                      {consistOf}
                    </p>
                    <div className="row mx-2 text-center mt-3">
                      <div className="col-4 px-0">
                        <span className="position-detail-span-bold-dark">
                          {proteins}
                        </span>
                        <br />
                        белков
                      </div>
                      <div className="col-3 px-0">
                        <span className="position-detail-span-bold-dark">
                          {fats}
                        </span>
                        <br />
                        жиров
                      </div>
                      <div className="col-5 px-0">
                        <span className="position-detail-span-bold-dark">
                          {carbohydrates}
                        </span>
                        <br />
                        углеводов
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-center py-4">
                  <button
                    type="button"
                    class="position-detail-btn-cart px-4 py-2"
                    onClick={() => addToCart(position)}
                  >
                    Добавить{" "}
                    {quantity === 0 ? (
                      <i class="fas fa-plus pl-2"></i>
                    ) : (
                      `(${quantity})`
                    )}{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="position-absolute menu-position-detail-bg">
            <div className="bg-detail-yellow"></div>
            <div className="bg-detail-white position-absolute"></div>
          </div>
        </div>
      );
    })
  )
);
