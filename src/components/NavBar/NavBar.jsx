import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import  Carrusel  from "../Carrusel/Carrusel";

const NavBar = () => {
  return (
    <>
    <nav className="nav-contenedor">
      <Link to={"/"}>
        <img
          className="nav-logo"
          src={require("../../img/logo sin fondo 1.png")}
          alt="Logo"
        />
      </Link>
      <div>
        <ul>
          <li className="nav-contenedor">
            <NavLink className="nav-menu" to={"/"}>
              Inicio
            </NavLink>
            <NavLink log className="nav-menu" to={"/despensa"}>
              Despensa
            </NavLink>
            <NavLink className="nav-menu" to={"/bebidas"}>
              Bebidas
            </NavLink>
            <NavLink className="nav-menu" to={"/heladera"}>
              Heladera
            </NavLink>
          </li>
        </ul>
      </div>
      <CartWidget />
    </nav>
    <Carrusel
    imagen1="imgcarrusel1"
    nombre1="Imagen uno"
    imagen2="imgcarrusel2"
    nombre2="Imagen dos"
    imagen3="imgcarrusel3"
    nombre3="Imagen tres"
    />
    </>
  );
};
export default NavBar;
