import "./Contador.css";
import { useState } from "react";

const Contador = ({ inicial, stock, agregarProd }) => {
  const [contador, setContador] = useState(inicial);

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const disminuirContador = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

 

  return (
    <>
      <div className="contenedor">
        <button className="btnMenos" onClick={disminuirContador}>
          {" "}
          -{" "}
        </button>
        <h2 className="numerito"> {contador} </h2>
        <button className="btnMas" onClick={aumentarContador}>
          {" "}
          +{" "}
        </button>
      </div>
      <button className="btnAgregar" onClick={() => agregarProd(contador) }>
        Agregar
      </button> 
    </>
  );
};

export default Contador;
