
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
    return (
        <nav className='nav-contenedor'>
            <img 
             className='nav-logo'
             src={require('../../img/logo sin fondo 1.png')}
             alt='Logo'
            />   
            <div className='nav-menu'>
                <ul>
                    <li>Inicio</li>
                    <li>Quienes somos</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                    <CartWidget />
                </ul>
            </div>
        </nav>
        
    )
}
export default NavBar;