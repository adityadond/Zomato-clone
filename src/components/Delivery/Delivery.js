import React from "react";
import "./Delivery.css";
import Filters from "../common/filters/Filters";
import DeliveryCollections from "./DeliveryCollections/DeliveryCollections";

const deliveryfilters = [
  {
    id: 1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

function Delivery() {
  return (
    <div>
      <div className="max-width">
        <Filters filterLists={deliveryfilters} />
      </div>
      <DeliveryCollections/>
    </div>
  );
}

export default Delivery;
