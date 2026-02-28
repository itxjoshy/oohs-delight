import { useState } from "react";
import FoodCard from "./FoodCard";
import "./foodlist.css";
import foods from "./data.js";
const FoodList = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (food, quantity, protein) => {
    const newItem = {
      name: food.name,
      quantity,
      protein,
    };

    setCart([...cart, newItem]);
    setExpandedId(null); // collapse after adding
  };

  return (
    <div className="flex flex-col gap-4 p-4">
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
