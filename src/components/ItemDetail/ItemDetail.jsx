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
      <h2> Articulo: {titulo} </h2>
      <h4> Precio: $ {precio}</h4>
      <h4>{id}</h4>
      <h4> {`Stock ${stock}`} </h4>
      <img src={imagen} alt={titulo} className="imgItem" />

      <p className="parrafoItem">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quia
        eligendi enim quam sint. Suscipit ipsa laboriosam iusto doloribus
        recusandae.
      </p>

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
