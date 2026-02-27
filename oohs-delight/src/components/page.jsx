import React from "react";
import "./page.css";
function Page({ activeContent, isOpen, closePage }) {
  return (
    <div className={`slide-page ${isOpen ? "open" : "closed"}`}>
      <button className="close-btn" onClick={closePage}>
        Close
      </button>
      <h2>{activeContent}</h2>
      <p>This is reusable content for {activeContent}</p>
    </div>
  );
}

export default Page;
