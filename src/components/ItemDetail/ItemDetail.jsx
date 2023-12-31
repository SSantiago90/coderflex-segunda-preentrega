import React from "react";
import "./itemdetail.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ product }) {
  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="card-detail_detail">
        <h1>{product.title}</h1>
        <h2 className="priceTag">$ {product.price}</h2>
        <small>{product.description}</small>
        <ItemCount initial={1} stock={product.stock} />
      </div>
    </div>
  );
}

export default ItemDetail;
