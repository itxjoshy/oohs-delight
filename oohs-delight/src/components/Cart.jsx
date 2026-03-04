import React from "react";
import "./cart.css";
function Cart() {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  return (
    <>
      <h2>Your Cart</h2>
      <div className="cart-page">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-wrapper">
            <div className="cart-content">
              {cartItems.map((item, i) => (
                <div key={item.name + i} className="cart-item">
                  <p>
                    {item.name} - {item.protein}
                  </p>
                  <div className="edit">
                    <button>edit</button>
                    <p> x{item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-button">
              <button
                onClick={() => {
                  const message = encodeURIComponent(
                    `Hello, I want to place an order for:\n${cartItems
                      .map(
                        (item) =>
                          `• ${item.name} (Qty: ${item.quantity}) - Protein: ${item.protein}`,
                      )
                      .join("\n")}`,
                  );
                  localStorage.removeItem("cart");
                  window.open(
                    `https://wa.me/+2348120195744?text=${message}`,
                    "_blank",
                  );
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Cart;
