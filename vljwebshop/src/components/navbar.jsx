import { Link } from "react-router-dom";
import logo from "../assets/MDLogo.png";

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="Logo" width="120" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;