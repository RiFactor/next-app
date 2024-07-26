"use client";
import React from "react";

const Button = () => {
  return (
    <button
      onClick={() => {
        console.log("click");
      }}
    >
      Add to Cart
    </button>
  );
};

export default Button;
