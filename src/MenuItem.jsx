import React from "react";
import "./App.css";

const MenuItem = ({ name, category, price, description, isVegetarian }) => {
  return (
    <div className="menu-card">
      <h3>{name}</h3>
      <p className="category">{category}</p>
      <p className="description">{description}</p>

      {isVegetarian && <span className="veg-badge">Vegetarian</span>}

      <p className="price">₹ {price}</p>
    </div>
  );
};

export default MenuItem;
