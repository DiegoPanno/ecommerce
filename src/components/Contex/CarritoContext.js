
import React, { useState, createContext } from "react";



export const CarritoContext = createContext({ carrito: [] });

export const CarritoProvider = ({children}) => {
    const [carrito, setCarrito] = useState([]);

    console.log(carrito);

    const agregarProductos = (item, cantidad) => {
        if(!yaEstaEnCarrito(item.id)){
            setCarrito(prev => [...prev, {item, cantidad}]);
        }else { 
            console.log('Producto agregado');
        }
        
    };

    const yaEstaEnCarrito = (id) => {
        return carrito.some(prod => prod.id === id);
    }   

    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
    }       

    const vaciarCarrito = () => {
        setCarrito([]);
    }
    
    const totalCantidad = carrito.reduce(
        (total, producto) => total + producto.cantidad,
        0
      );


    return (
        <CarritoContext.Provider value={{carrito, agregarProductos, eliminarProducto, vaciarCarrito, totalCantidad }}>
            {children}
        </CarritoContext.Provider>

    );


};