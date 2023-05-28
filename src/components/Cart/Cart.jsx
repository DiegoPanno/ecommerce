import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../Contex/CarritoContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const { carrito, vaciarCarrito, totalCantidad } = useContext(CarritoContext);



  const total = carrito.reduce(
    (total, producto) => total + (producto.item.precio * producto.cantidad),
    0
  );

  if (totalCantidad === 0) {
    return (
      <>
        <h2>No hay productos en el carrito</h2>
        <Link to="/">Seguir comprando</Link>
      </>
    );
  }

  return (
    <div>
      {carrito.map((producto) => (
        <CartItem key={producto.item.id} {...producto} />
      ))}

      <h3>Cantidad total {totalCantidad}</h3>
      <h3>Total $ {total}</h3>
      <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;

