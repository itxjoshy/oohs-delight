import { useState, useEffect } from "react";
import FoodCard from "./FoodCard";
import "./foodlist.css";
import foods from "./data.js";
const FoodList = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (food, quantity, protein) => {
    const newItem = {
      name: food.name,
      quantity,
      protein,
    };

    setCart([...cart, newItem]);
    console.log("Cart updated:", [...cart, newItem]);
  };

  return (
    <div>
      {foods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          expanded={expandedId === food.id}
          onExpand={() =>
            setExpandedId(expandedId === food.id ? null : food.id)
          }
          onAdd={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default FoodList;
