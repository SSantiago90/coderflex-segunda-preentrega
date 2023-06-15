import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleItem } from "../../services/MockAPI";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemListContainer() {
  let [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getSingleItem(id).then((response) => {
      setProduct(response);
    });
  }, [id]);

  return <ItemDetail product={product} />;
}

export default ItemListContainer;
