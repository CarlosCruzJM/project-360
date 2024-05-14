import logo from '../../assets/360.png';
import '../../styles/navbar.css';


const Navbar = () => {

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
                        <a className="categorias" href="#inicio">INICIO</a>
                        <div className="line"></div>
                        <a className="categorias" href="#cat">CATEGORIAS</a>
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
                        <a href="#user">Hola, Miguel<i className="bi bi-person-circle"></i></a>
                        <div className="cart-container">
                            <i className="bi bi-cart cart-border"></i>
                            <p>2</p>
                        </div>
                    </div>
                    <div className="cat2">
                        <div className="cat">
                            <a className="categorias" href="#combo">PAQUETES</a>
                            <div className="line"></div>
                            <a className="categorias" href="#about">NOSOTROS</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );

};

export default Navbar;
