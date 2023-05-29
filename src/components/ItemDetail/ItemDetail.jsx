import Contador from "../Contador/Contador";
import "./ItemDetail.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from '../Contex/CarritoContext' 
import { useContext } from "react";


const ItemDetail = ({ id, titulo, precio, imagen, stock }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProductos } = useContext(CarritoContext);

  const manejarCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, titulo, precio };
    agregarProductos(item, cantidad);
  };

  return (
    
    <div className="contenedorItem">
      <img src={imagen} alt={titulo} className="imgItem" />
      <h2> {titulo} </h2>
      <h4>  $ {precio}</h4>
      <h4>{id}</h4>
      <h4> {`Stock ${stock}`} </h4>

      

      {agregarCantidad > 0 ? (
        <Link to="/cart">
          {" "}
          <button className="btnAgregar">Terminar Compra</button>{" "}
        </Link>
      ) : (
        <Contador inicial={1} stock={stock} agregarProd={manejarCantidad} />
      )}
    </div>
  );
};

export default ItemDetail;
