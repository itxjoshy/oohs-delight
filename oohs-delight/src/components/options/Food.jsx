import React from "react";
import { useState } from "react";
import { foods, categories } from "../data";
import "./food.css";
function Food({ onClose }) {
  const [quantities, setQuantities] = useState({});
  const [activeCategory, setActiveCategory] = useState("All");

  const increment = (id) =>
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

  const decrement = (id) =>
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));

  const filtered =
    activeCategory === "All"
      ? foods
      : foods.filter((item) => item.category === activeCategory);

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
  const totalPrice = foods.reduce(
    (sum, item) => sum + (quantities[item.id] || 0) * item.price,
    0,
  );
  return (
    <section
      style={{
        marginBottom: 0,
      }}
    >
      <header className="header">
        <button className="back-btn" onClick={onClose}>
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1>Food Menu</h1>
        <div className="header-spacer" />
      </header>

      <div className="filter-sticky">
        <div className="filter-row">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="menu-list">
        {filtered.map((item) => {
          const qty = quantities[item.id] || 0;
          const isActive = qty > 0;

          return (
            <div
              key={item.id}
              className={`menu-card ${isActive ? "menu-card--active" : ""}`}
            >
              <div className="menu-icon">
                <span className="material-symbols-outlined">{item.icon}</span>
              </div>

              <div className="menu-info">
                <h3>{item.name}</h3>
                <p className="text-muted">{item.description}</p>

                <div className="menu-row">
                  <span className="price">
                    ₦{item.price.toLocaleString()}
                    {item.unit && <span className="unit"> /{item.unit}</span>}
                  </span>

                  <div
                    className={`stepper ${isActive ? "stepper--active" : ""}`}
                  >
                    <button
                      className="stepper-btn"
                      onClick={() => decrement(item.id)}
                    >
                      <span className="material-symbols-outlined">remove</span>
                    </button>
                    <span
                      className={`stepper-qty ${isActive ? "stepper-qty--active" : ""}`}
                    >
                      {qty}
                    </span>
                    <button
                      className="stepper-btn"
                      onClick={() => increment(item.id)}
                    >
                      <span className="material-symbols-outlined">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {totalItems > 0 && (
        <div className="sticky-bottom">
          <div>
            <div className="text-muted">
              {totalItems} item{totalItems > 1 ? "s" : ""} selected
            </div>
            <div className="price checkout-price">
              ₦{totalPrice.toLocaleString()}
            </div>
          </div>
          <button className="btn btn-primary">
            View Order
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      )}
    </section>
  );
}

export default Food;
