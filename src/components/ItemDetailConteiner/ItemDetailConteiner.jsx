import { useState, useEffect } from "react";
import { getIntem } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const { idItem } = useParams();

  useEffect(() => {
    getIntem(idItem)
      .then((res) => setProducto(res))
      .catch((error) => {
        console.error("Error al obtener el producto:", error);
      });
  }, [idItem]);

  return (
    <div>
      {producto ? (
        <ItemDetail {...producto} />
      ) : (
        <p>Cargando el detalle del producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;

