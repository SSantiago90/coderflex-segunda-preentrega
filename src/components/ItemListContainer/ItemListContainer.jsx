import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../../services/MockAPI";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {
  let [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getItems(categoryId).then((response) => {
      setProducts(response);
    });
  }, [categoryId]);

  return <ItemList title={greeting} products={products} />;
}

export default ItemListContainer;
