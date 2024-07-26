import React from "react";
import Button from "../Button";
import styles from "./ProductCard.module.css";

const ProductCard = () => {
  return (
    <>
      <div className={styles.card}>
        <Button />
      </div>
      <div className="p-5 my-5 hover:bg-sky-500 bg-sky-400 cursor-pointer text-white text-xl font-bold">
        Product Card
      </div>
      <button className="btn btn-primary">Add to Cart</button>
    </>
  );
};

export default ProductCard;
