import "../css/Navbar.css";
import logo from "../media/logo.png";
export default function Navbar() {
  return (
    <nav className="Navbar">
      <div className="header">
        <img src={logo} alt="logo" />
        <h1>Hundshoppen</h1>
      </div>
      <div className="links">Produkter Kundvagn 0</div>
    </nav>
  );
}
