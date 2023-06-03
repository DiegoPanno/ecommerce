import React, { createContext, useState } from "react";

export const CarritoContext = createContext({
  carrito: [],
  vaciarCarrito: () => {}
});

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const agregarProductos = (item, cantidad) => {
    if (!yaEstaEnCarrito(item.id)) {
      setCarrito((prev) => [...prev, { item, cantidad }]);
    } else {
      console.log("Producto agregado");
    }
  };

  const yaEstaEnCarrito = (id) => {
    return carrito.some((prod) => prod.item.id === id);
  };

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter(
      (prod) => prod.item.id !== id
    );
    setCarrito(carritoActualizado);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const totalCantidad = carrito.reduce(
    (total, producto) => total + producto.cantidad,
    0
  );

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProductos,
        eliminarProducto,
        vaciarCarrito,
        totalCantidad
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
