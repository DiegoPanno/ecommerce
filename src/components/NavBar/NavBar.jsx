import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
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
  );
};
export default NavBar;
