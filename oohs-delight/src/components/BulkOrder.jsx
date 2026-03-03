import React from "react";
import FoodList from "./FoodList";
function BulkOrder() {
  return (
    <div className="cat-container">
      <h2>Bulk Order</h2>
      <p>
        this package is designed for larger groups, allowing you to order
        multiple dishes at once and enjoy a variety of flavors.
      </p>
      <div className="select-container">
        <FoodList />
        <textarea
          name="specialRequests"
          id="specialRequests"
          placeholder="Any special requests?"
        ></textarea>
      </div>
    </div>
  );
}

export default BulkOrder;
