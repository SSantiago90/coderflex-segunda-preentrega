import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./styles.css";

export default function NavBar() {
  return (
    <nav>
      <ul className="nav">
        <div className="nav_left">
          <li className="nav_item">
            <Link className="nav_link nav_branding" to="/">
              <h2>miTienda</h2>
            </Link>
          </li>
          <div className="nav_main">
            <li className="nav_item">
              <Link className="nav_link" to="/category/remeras">
                Remeras
              </Link>
            </li>
            <li className="nav_item">
              <Link className="nav_link" to="/category/camperas">
                Camperas
              </Link>
            </li>
            <li className="nav_item">
              <Link className="nav_link" to="/category/zapatillas">
                Zapatillas
              </Link>
            </li>
          </div>
        </div>
        <CartWidget />
      </ul>
    </nav>
  );
}
