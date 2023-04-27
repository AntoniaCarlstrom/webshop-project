import "../css/Products.css";
import Product from "./Product";

export default function Products({ initialItems }) {
  return (
    <div className="Products">
      <h2 className="Products-title">PRODUKTER</h2>
      <div className="Products-items">
        {initialItems.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
      <Product />
    </div>
  );
}
