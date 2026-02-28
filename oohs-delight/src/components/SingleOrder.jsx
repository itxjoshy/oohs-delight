import React from "react";
import FoodList from "./FoodList";
function SingleOrder() {
  return (
    <div className="cat-container">
      <h2>Single Order</h2>
      <p>
        this package allows you to order food in smaller quantities, making it
        easier to try new dishes without committing to a full portion.
      </p>
      <div className="select-container">
        <FoodList />
      </div>
    </div>
  );
}

export default SingleOrder;
