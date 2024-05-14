const Benefits = () => {
    return (
        <div className=" w-full flex justify-center absolute -bottom-16 z-10 font-gugi">
            <div className="bg-white w-2/4 h-32 flex flex-row items-center rounded-xl">
                <div className="w-1/3 h-full flex flex-row items-center m-6">
                    <i className="bi bi-truck text-5xl"></i>
                    <p className="ms-5">Envío gratis a todo el país a partir de $820 mxn</p>
                </div>
                <div className="h-20 border-solid border border-gray-400"></div>
                <div className="w-1/3 h-full flex flex-row items-center m-6">
                    <i className="bi bi-box2 text-5xl"></i>
                    <p className="ms-4">Productos vanguardistas y de alta calidad</p>
                </div>
                <div className="h-20 border-solid border border-gray-400"></div>
                <div className="w-1/3 h-full flex flex-row items-center m-6">
                    <i className="bi bi-credit-card text-5xl"></i>
                    <p className="ms-4">Método de pago rápido y seguro </p>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
