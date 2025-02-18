import { Link } from 'react-router-dom';
import logo from '../../assets/360.png';
import '../../styles/navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuOptions = [
        "360 Spray paint Matte finish",
        "360 Spray paint Acabado brillante",
        "360 Spray paint Fluorescente",
        "360 Spray paint Alta presión",
        "360 Spray paint Pure crome",
        "Válvulas Delta Caps",
        "Ediciones especiales"
    ];

    return (
        <nav className="navbar z-10 relative font-gurajada">
            <div className="parent">
                <div className="div1">
                    <form className="form">
                        <div>
                            <button className="btn btn-danger rounded-end-0" type="submit"><i className="bi bi-search"></i></button>
                        </div>
                        <input type="text" placeholder="Buscar..."/>
                    </form>
                    <div className="cat1">
                        <Link className="categorias" to="/">INICIO</Link>
                        <div className="line"></div>
                        <div className="categorias relative" onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>
                            <span>CATEGORIAS</span>
                            <div className={`absolute w-72 p-4 z-10 top-8 left-0 bg-slate-100 shadow-md rounded-lg transition-all duration-500 ease-in-out ${showMenu ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                                {menuOptions.map((option, index) => (
                                    <a key={index} href="#" className="block w-full rounded-md px-4 py-2 text-gray-800 hover:bg-gray-200">{option}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="div2">
                    <a href="#inicio">
                        <div className="logo-container">
                            <img src={logo} alt="logo360"></img>
                        </div>
                    </a>
                </div>
                <div className="div3">
                    <div className="user">
                        <Link to="/login">Hola, Miguel<i className="bi bi-person-circle"></i></Link>
                        <div className="cart-container">
                            <i className="bi bi-cart cart-border"></i>
                            <p>2</p>
                        </div>
                    </div>
                    <div className="cat2">
                        <ul className="cat">
                            <li><a className="categorias" href="#combo">PAQUETES</a></li>
                            <div className="line"></div>
                            <li><a className="categorias" href="/login">NOSOTROS</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
