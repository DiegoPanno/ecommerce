import "./CartWidget.css";


const CartWidget = () => {
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png";
  return (
    <div className="img-contenedor">
      <img className="imgCarrito" src={imgCarrito} alt="Carrito" />
      
        <h3>1</h3>
      
    </div>
  );
};

export default CartWidget;
