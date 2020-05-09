import React from "react";
import { inject, observer } from "mobx-react";
import "./SpecialOffer.css";

export const SpecialOffer = inject("rootStore")(
  observer(props => {
    const specialOffer = props.rootStore.menuStore.specialOffer.get();
    const specialOfferEl = Boolean(specialOffer) ? 
      <div className="col-12">
        <h2 className="font-weight-bold special-offer-title p-2 pt-0">Специальное предложение</h2>
        <img className="w-100 special-offer-image" src={specialOffer}/>
      </div>
     : "";

    return specialOfferEl;
    
  })
)