import { Link } from "react-router-dom";
import "./styles.css";

function Item({ title, id, img, price, category }) {
  return (
    <div className="item-card">
      <button className="item-card_favicon">♥</button>
      <div className="item-card_header">
        <h2>{title}</h2>
        <small>{category}</small>
      </div>
      <div className="item-card_img">
        <img src={img} alt="imagen"></img>
      </div>

      <div className="item-card_detail">
        <h4 className="item-card_price-tag">$ {price}</h4>
        <small>{category}</small>
      </div>
      <Link to={`/product/${id}`}>
        <button className="btn">Ver detalle</button>
      </Link>
    </div>
  );
}
export default Item;
