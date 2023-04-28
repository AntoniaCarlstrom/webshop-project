import "../css/Navbar.css";
import logo from "../media/logo.png";
import shoppingCart from "../media/shoppingCart.png";

export default function Navbar({ handleNavClick }) {
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
            <button onClick={() => handleNavClick("products")}>Products</button>
          </li>
          <li>
            <button onClick={() => handleNavClick("cart")}>Cart</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
