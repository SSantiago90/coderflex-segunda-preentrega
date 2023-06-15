import CartWidget from "../CartWidget/CartWidget";
import "./styles.css";

export default function NavBar() {
  return (
    <nav>
      <ul className="nav">
        <div className="nav_left">
          <li className="nav_item">
            <a className="nav_link nav_branding" href="/">
              <h2>miTienda</h2>
            </a>
          </li>
          <div className="nav_main">
            <li className="nav_item">
              <a className="nav_link" href="/">
                Remeras
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_link" href="/">
                Camperas
              </a>
            </li>
            <li className="nav_item">
              <a className="nav_link" href="/">
                Zapatillas
              </a>
            </li>
          </div>
        </div>
        <CartWidget />
      </ul>
    </nav>
  );
}
