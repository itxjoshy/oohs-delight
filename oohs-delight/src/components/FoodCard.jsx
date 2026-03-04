import React from "react";
import { useState } from "react";

function FoodCard({ food, expanded, onExpand, onAdd }) {
  const [quantity, setQuantity] = useState(1);
  const [protein, setProtein] = useState("");

  return (
    <div className="food-card" onClick={onExpand}>
      {/* Top section */}
      <div className="food-header">
        <h3>{food.name}</h3>

        <button className="plus-btn" onClick={onExpand}>
          +
        </button>
      </div>

      {/* Expand section */}
      <div
        className={`expand-section ${expanded ? "open" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="expand-content">
          <select
            value={protein}
            onChange={(e) => {
              setProtein(e.target.value);
            }}
          >
            <option value="">Select Protein</option>
            {food.proteins.map((p, i) => (
              <option key={i} value={p}>
                {p}
              </option>
            ))}
          </select>

          <div className="qty-control">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>

          <button
            className="add-btn"
            disabled={!protein}
            onClick={() => onAdd(food, quantity, protein)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default FoodCard;
