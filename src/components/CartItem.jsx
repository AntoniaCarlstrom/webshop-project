import React from "react";
import "./css/CartItem.css";

export default function CartItem({ id, name, price, qty, updateQty }) {
  const addOne = () => {
    updateQty(id, qty + 1);
  };
  const subOne = () => {
    updateQty(id, qty - 1);
  };

  return (
    <div className="CartItem">
      <div>{name}</div>
      <div>{price}:-</div>
      <div>
        <button onClick={subOne} disabled={qty <= 1}>
          -
        </button>
        {qty}
        <button onClick={addOne}>+</button>
      </div>
      <div>Totalt: {qty * price}:- </div>
    </div>
  );
}
