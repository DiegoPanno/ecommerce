import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
    
      <ul className="contenedorFooterLink">
        <Link to={"/"}>
          <img
            className="nav-logo"
            src={require("../../img/logo sin fondo 1.png")}
            alt="Logo"
          />
        </Link>
        <Link className="navFooter" to="*">
          Inicio
        </Link>
        <Link className="navFooter" to="*">
          Quienes somos
        </Link>
        <Link className="navFooter" to="*">
          Contacto
        </Link>
      </ul>
      
    </>
  );
};

export default Footer;
