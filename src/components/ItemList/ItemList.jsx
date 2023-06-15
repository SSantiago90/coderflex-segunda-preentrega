import Item from "../Item/Item";
import "./styles.css";

function ItemList({ products, title }) {
  return (
    <div className="itemList_container">
      <h1>{title}</h1>
      <div className="itemList">
        {products.map((itemInArray) => (
          <Item key={itemInArray.id} {...itemInArray} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
