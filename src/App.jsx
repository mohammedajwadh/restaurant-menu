import React from "react";
import MenuItem from "./MenuItem";
import { mainCourses, desserts } from "./data";
import "./App.css";

const App = () => {
  const totalItems = mainCourses.length + desserts.length;

  return (
    <div className="container">
      <header>
        <h1>Yummy Restaurant</h1>
        <p className="tagline">Delicious Food, Made Fresh Daily</p>
      </header>

      <section>
        <h2>Main Courses</h2>
        <div className="menu-grid">
          {mainCourses.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </section>

      <section>
        <h2>Desserts</h2>
        <div className="menu-grid">
          {desserts.map((item, index) => (
            <MenuItem key={index} {...item} />
          ))}
        </div>
      </section>

      <section className="info-section">
        <h3>Restaurant Info</h3>
        <p>Total Menu Items: {totalItems}</p>
        <p>Open Daily: 11 AM – 10 PM</p>
        <p>Contact: +91 98765 43210</p>
      </section>

      <footer>
        <p>© 2025 Yummy Restaurant | yum@restaurant.com</p>
      </footer>
    </div>
  );
};

export default App;
