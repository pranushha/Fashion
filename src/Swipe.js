import React from "react";
import Card, { CardContent } from "./Card"; // Correct import for both default and named exports
import { Button } from "./Button";
import "./Swipe.css";
import { FiHeart as Heart, FiLock as Lock, FiBookmark as Bookmark } from "react-icons/fi";

const Swipe = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <header className="header">
        <h1 className="title">Ready Set Style!</h1>
        <div className="menu">
          <Button variant="ghost">Community</Button>
          <Button variant="ghost">Trial Room</Button>
          <Button variant="ghost">Closet</Button>
          <Button variant="ghost">Settings</Button>
        </div>
      </header>

      <div className="container">
        <div className="top-bar">
          <Button variant="outline">
            Save <Bookmark className="ml-2" />
          </Button>
          <div className="tags">
            <span className="badge">Winter</span>
            <span className="badge">Sweater</span>
            <span className="badge">Blue</span>
            <span className="badge">College</span>
            <span className="badge">Comfortable</span>
          </div>
        </div>

        {[{ category: "Accessories", items: ["earrings", "bracelet", "bag"] },
          { category: "Tops", items: ["sweater"] },
          { category: "Bottoms", items: ["jeans"] },
          { category: "Footwear", items: ["shoes"] }].map((section, index) => (
          <Card key={index} className="section">
            <CardContent className="section-content">
              <div className="section-header">
                <Lock className="icon-lock" />
                <Heart className="icon-heart" />
                <h2>{section.category}</h2>
              </div>
              <div className="items">
                {section.items.map((item, i) => (
                  <div key={i} className="item">{item}</div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Swipe;
