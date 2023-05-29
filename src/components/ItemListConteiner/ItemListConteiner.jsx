import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListConteiner.css";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemListConteiner = (props) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  
  useEffect(() => {
    const misProductos = idCategoria
      ? query(collection(db, "inventario"), where("idCat", "==", idCategoria))
      : collection(db, "inventario");

      getDocs(misProductos)
        .then(res => {
           const nuevosProductos = res.docs.map(doc => {
            const data = doc.data()
            return {id:doc.id, ...data}
          })
          setProductos(nuevosProductos);
        })
        .catch((error) => console.log(error));

  }, [idCategoria]);

  return (
    <div>
      <h1>{props.greeting}</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListConteiner;
