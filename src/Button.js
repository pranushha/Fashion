import React from "react";

export const Button = ({ children, variant, onClick }) => {
  const getVariantClass = (variant) => {
    switch (variant) {
      case "ghost":
        return "btn-ghost";
      case "outline":
        return "btn-outline";
      default:
        return "btn-default";
    }
  };

  return (
    <button className={`btn ${getVariantClass(variant)}`} onClick={onClick}>
      {children}
    </button>
  );
};
