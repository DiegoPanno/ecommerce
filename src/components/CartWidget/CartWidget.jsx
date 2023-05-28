import "./CartWidget.css";
import { useContext } from "react";
import { CarritoContext } from "../Contex/CarritoContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { carrito, totalCantidad } = useContext(CarritoContext);

  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";
  return (
    <Link to="/cart" className="img-contenedor">
      <img className="imgCarrito" src={imgCarrito} alt="Carrito" />

      {totalCantidad > 0 && <span> {totalCantidad} </span>}
    </Link>
  );
};

export default CartWidget;
