import "../css/Product.css";
import { ShopContext } from "../context/shop-context";

export default function Product({ id, name, imgSrc, price, qty }) {
  return (
    <div className="Product">
      <h2>{name}</h2>
      <img src={imgSrc} alt={name}></img>
      <div>Pris: {price}</div>
      <div>Lagersaldo: {qty}</div>
      {qty > 0 ? <button>Add to cart</button> : <button>Slut i lager</button>}
    </div>
  );
}

//rafce
