import React, { useState, useContext } from "react";
import { CarritoContext } from "../../Contex/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const { carrito, vaciarCarrito } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailconf, setEmailconf] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const manejadorSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailconf) {
      setError("Por favor completar los campos requeridos ");
      return;
    }

    if (email !== emailconf) {
      setError("El email no coincide");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        titulo: producto.item.titulo,
        cantidad: producto.cantidad
      })),
      total: carrito.reduce(
        (total, producto) =>
          total + producto.item.precio * producto.cantidad,
        0
      ),
      nombre,
      apellido,
      telefono,
      email
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
        setError("Error al crear la orden, intente más tarde.");
      });
  };

  return (
    <div className="checkConte">
      <h2 className="h2Check">Checkout</h2>
      <form className="inputF" onSubmit={manejadorSubmit}>
        {carrito.map((prod) => (
          <div key={prod.item.id}>
            <p>
              {prod.item.titulo} x {prod.cantidad}
            </p>
            <p>$ {prod.item.precio}</p>
            <hr />
          </div>
        ))}
        <hr />

        <div>
          
          <input
            placeholder="Nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          
          <input
            placeholder="Apellido"
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div>
          
          <input
            placeholder="Teléfono"
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div>
          
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          
          <input
            placeholder="Email Confirmación"
            type="email"
            value={emailconf}
            onChange={(e) => setEmailconf(e.target.value)}
          />
        </div>

        {error && <p>{error}</p>}

        <button className="btnAgregar" type="submit">Finalizar orden</button>

        {ordenId && (
          <strong>
            ¡Gracias por tu compra, la estaremos despachando a la brevedad con
            el número de orden: {ordenId}
          </strong>
        )}
      </form>
    </div>
  );
};

export default Checkout;

