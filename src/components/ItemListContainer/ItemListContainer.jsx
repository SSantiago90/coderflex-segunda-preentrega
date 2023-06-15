import "./styles.css";

function ItemListContainer(props) {
  return (
    <div className="itemlist_container">
      <h2>{props.greeting}</h2>
    </div>
  );
}

export default ItemListContainer;
