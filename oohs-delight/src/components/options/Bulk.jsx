import React from "react";
import { useState } from "react";
import "./bulk.css";
import { bulkItems } from "../data";
import { categories } from "../data";
function Bulk({ onClose }) {
  const [quantities, setQuantities] = useState({});
  const [activeCategory, setActiveCategory] = useState("All Items");
  const updateQuantity = (id, change) => {
    setQuantities((prev) => {
      const current = prev[id] || 0;
      let next = current + change;
      if (next > 0 && next < 10) next = change > 0 ? 10 : 0;
      if (next < 0) next = 0;
      return { ...prev, [id]: next };
    });
  };

  const filtered =
    activeCategory === "All Items"
      ? bulkItems
      : bulkItems.filter((item) => item.category === activeCategory);

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
  const totalPrice = bulkItems.reduce(
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
        <h1>Bulk Menu</h1>
        <div className="header-spacer" />
      </header>

      <div className="bulk-main">
        {/* Notice banner */}
        <div className="bulk-notice">
          <span className="material-symbols-outlined notice-icon">info</span>
          <p>
            Bulk orders require a minimum of 10 portions per item. Prepared
            fresh — order 24h in advance.
          </p>
        </div>

        {/* Filter chips */}
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

        {/* Items */}
        <div className="bulk-list">
          {filtered.map((item) => {
            const qty = quantities[item.id] || 0;
            const itemTotal = qty * item.price;

            return (
              <div key={item.id} className="bulk-card">
                <div className="bulk-icon">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>

                <div className="bulk-info">
                  <h2>{item.name}</h2>
                  <p className="text-muted">{item.description}</p>
                  <span className="serves-note">
                    Serves approx. 1 person per portion.
                  </span>

                  <div className="bulk-row">
                    <div className="bulk-pricing">
                      <span className="text-muted">
                        Base: ₦{item.price.toLocaleString()} / portion
                      </span>
                      <div className="price">
                        {qty} × ₦{item.price.toLocaleString()} = ₦
                        {itemTotal.toLocaleString()}
                      </div>
                    </div>

                    <div className="bulk-stepper">
                      <button
                        className="bulk-stepper-btn"
                        onClick={() => updateQuantity(item.id, -5)}
                        aria-label="Decrease quantity"
                      >
                        <span className="material-symbols-outlined">
                          remove
                        </span>
                      </button>
                      <span className="bulk-qty">{qty}</span>
                      <button
                        className="bulk-stepper-btn bulk-stepper-btn--add"
                        onClick={() => updateQuantity(item.id, 5)}
                        aria-label="Increase quantity"
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
      </div>

      {/* Sticky bottom bar */}
      {totalItems > 0 && (
        <div className="sticky-bottom">
          <div>
            <div className="text-muted">{totalItems} items</div>
            <div className="price checkout-price">
              ₦{totalPrice.toLocaleString()}
            </div>
          </div>
          <button className="btn btn-primary">
            View Order
            <span className="material-symbols-outlined">shopping_basket</span>
          </button>
        </div>
      )}
    </section>
  );
}

export default Bulk;
