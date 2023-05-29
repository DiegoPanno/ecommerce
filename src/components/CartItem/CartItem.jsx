import { useContext } from "react";
import { CarritoContext } from "../Contex/CarritoContext";
import './CartItem.css';

const CartItem = ({ item, cantidad }) => { 
  const { eliminarProducto } = useContext(CarritoContext);

  return (
    <div className="contenedorCartItem">
        <img src={item.imagen} alt="" />
      <h3 className="h3CartItem">{item.nombre}</h3>
      <p>Cantidad {cantidad}</p>
      <p>Precio $ {item.precio}</p>
      <button onClick={() => eliminarProducto(item.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;

