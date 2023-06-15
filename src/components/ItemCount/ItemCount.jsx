import { useState } from "react";
import "./itemcount.css";

function ItemCount({ stock, initial }) {
  let [count, setCount] = useState(1);

  function handlePlus() {
    if (count < stock) setCount(count + 1);
  }

  function handleMinus() {
    if (count > 1) setCount(count - 1);
  }

  function onAddToCart() {
    alert(`Agregadas ${count} unidades al carrito`);
  }

  return (
    <div className="itemcount_container">
      <small>Agregá la cantidad deseada al carrito</small>
      <div className="itemcount_control">
        <button className="btn btn-danger" onClick={handleMinus}>
          -
        </button>
        <span className="itemcount_count">{count}</span>
        <button className="btn btn-success" onClick={handlePlus}>
          +
        </button>
      </div>

      <div className="itemcount_btns">
        <button onClick={onAddToCart} className="btn btn-info">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ItemCount;
