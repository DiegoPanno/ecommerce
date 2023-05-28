import "./Bebidas.css";
import { useState, useEffect } from "react";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/config";

const Bebidas = () => {
  const [productos, setProductos] = useState([]);



  useEffect(() => {
    //const misProductos = query(collection(db, 'inventario'));

    const misProductos = query(collection(db, 'inventario'), where('precio', '<', 500))


    getDocs(misProductos)
  .then((snapshot) => {
    setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  });

  }, []);

  return (
    <>
      <h2>Productos</h2>
      <div className="prodConteniner">
        {productos.map((producto) => (
          <div className="prodCard" key={producto.id}>
            <h2>{producto.nombre}</h2>
            <p> {producto.stock} </p>
            <button>Comprar </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Bebidas;

