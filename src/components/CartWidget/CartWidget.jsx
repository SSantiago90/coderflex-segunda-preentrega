import "./styles.css";

function CartWidget() {
  return (
    <div className="cartWidget">
      <a href="/">
        <img src="/assets/imgs/cartwidget.svg" alt="cart icon" />
        <span className="cartWidget_count">3</span>
      </a>
    </div>
  );
}

export default CartWidget;
