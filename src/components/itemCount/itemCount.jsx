import React, { useState } from "react";
import "./itemCount.css"

const ItemCount = ({cantidad, restarprod, sumarprod, botonAgregarCarrito}) => {
    return(
        <div>
            <div className="item-count">
                <button onClick={restarprod}>-</button>
                <p>{cantidad}</p>
                <button onClick={sumarprod}>+</button>
            </div>
            <div className="div-boton-agregar">
                <button className="agregar-al-carrito" onClick={botonAgregarCarrito}>Agregar al carrito</button>                
            </div>
        </div>
    )
}
export default ItemCount