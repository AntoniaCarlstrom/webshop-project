import React from "react";
import CartItem from "./CartItem";
import { useState, useEffect } from "react";
import "./css/Cart.css";

export default function Cart({ initialItems }) {
  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    console.log("Hello from your effect!");
  }, [items]);

  const updateQty = (id, newQty) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setItems(newItems);
  };

  const grandTotal = items
    .reduce((total, item) => total + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <div className="Cart">
      <h1 className="Cart-title">Varukorg</h1>
      <div className="Cart-items">
        {items.map((item) => (
          <CartItem key={item.id} updateQty={updateQty} {...item} />
        ))}
        <h2 className="Cart-total">Grand total: {grandTotal}</h2>
      </div>
      <button>KÖP</button>
      <button>TÖM VARUKORGEN</button>
    </div>
  );
}
