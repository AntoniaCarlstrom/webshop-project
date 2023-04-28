import "../css/Navbar.css";
import logo from "../media/logo.png";
import shoppingCart from "../media/shoppingCart.png";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="header">
        <img src={logo} alt="logo" />
        <h1>Hundshoppen</h1>
      </div>
      <div className="links">
        <ul>
          <li></li>
          <li>
            <a href="/products">Produkter</a>
          </li>
          <li>
            <a href="/cart">
              {/* FIXA LÄNKARNA, BÖRJAT MED ROUTER! */}
              <img src={shoppingCart} alt="shoppingCart" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
