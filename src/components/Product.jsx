import "../css/Product.css";

export default function Product({ id, name, imgSrc, price, qty }) {
  return (
    <div className="Product">
      <h2>{name}</h2>
      <img src={imgSrc} alt={name}></img>
      <div>Pris: {price}</div>
      <div>Lagersaldo: {qty}</div>
      <button>Add to cart</button>
    </div>
  );
}

//rafce
