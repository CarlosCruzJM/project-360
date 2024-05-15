import "../../styles/styles.css";

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 w-full font-gurajada">
            <div className="container mx-auto flex flex-col items-center">
                {/* Redes Sociales */}
                <div className="mb-4">
                    <a href="#" className="text-gray-400 hover:text-white mx-2">
                        <i className="bi bi-threads"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2">
                        <i className="bi bi-tiktok"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2">
                        <i className="bi bi-globe"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white mx-2">
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>

                {/* Enlaces */}
                <div className="mb-4">
                    <a href="/privacidad" className="text-gray-400 hover:text-white mx-4">
                        Política de privacidad
                    </a>
                    <a href="/terminos" className="text-gray-400 hover:text-white mx-4">
                        Términos y condiciones
                    </a>
                    <a href="/contacto" className="text-gray-400 hover:text-white mx-4">
                        Contáctanos
                    </a>
                </div>

                {/* Derechos Reservados */}
                <p className="text-gray-400">
                    © {new Date().getFullYear()} Spray Paint 360. Todos los derechos
                    reservados.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
