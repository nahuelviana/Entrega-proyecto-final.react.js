import  {React, useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Carrito.css"
import { Link } from "react-router-dom";

const Carrito = () => {
    const {carrito, totalDeCompra, botonVaciarCarrito} = useContext(CartContext);
    const handleVaciar =()=>{
        botonVaciarCarrito();
    }
    return(
        <div className="container">
            <div className="contendor-titulo">
                <h1>carrito</h1>
            </div>
            {
                carrito.map((item)=>(
                    
                    <div key={item.id} className="contendor-cards-carrito">
                        <div className="card-carrito">
                            <h3>{item.nombre}</h3>
                            <img src={item.img} alt={item.nombre} />
                            <div className="carrito-detalle">
                                <p>Precio unit: ${item.precio}</p>
                                <p>cantidad: {item.cantidad}</p>
                                <p>Subtotal: ${item.precio * item.cantidad}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
            {
                carrito.length > 0 ? 
                <div className="contenedor-acciones-carrito">
                    <div className="acciones-carrito">
                        <div className="precio-total">
                            <h4>Precio total: ${totalDeCompra()}</h4>
                        </div>
                        <Link to="/checkout"><button className="checkout">checkout</button></Link>
                        <button className="vaciar-carrito" onClick={handleVaciar}>Vaciar carrito</button>
                    </div>
                </div>:
                <div className="contenedor-no-hay-prod">
                    <div className="no-hay-prod">
                        <h5>No hay productos en el carrito </h5>
                        <Link to="/"><button className="boton-volver">Volver</button></Link>
                    </div>
                </div>
            }
        </div>
    )
}
export default Carrito