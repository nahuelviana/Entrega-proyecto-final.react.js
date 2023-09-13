import React, { useContext } from "react"
import "./CartWidget.css"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);

    const cantidad = cantidadEnCarrito();

    return (
        <div className="carrito">
            <Link to="/cart">
                <div className="iconocarri">
                    <img className="iconoCarrito" src="/img/carrito-de-compras (2).png" alt="" />
                    <span className="numerito">{cantidad}</span>
                </div>
            </Link>
        </div>
    )
}

export default CartWidget