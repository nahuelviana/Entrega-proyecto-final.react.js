import { useContext, useState } from "react"
import "./ItemDetail.css"
import { CartContext } from "../context/CartContext"
import ItemCount from "../itemCount/itemCount";


const ItemDetail = ({item}) => {
    const {carrito, botonAgregarCarrito} = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1)
    const restarprod = () => {
        cantidad > 1 && setCantidad (cantidad - 1)
    }
    const sumarprod = () => {
        cantidad < item.stock && setCantidad (cantidad + 1)
    }
    return 	(	
        <div className="itemdetalle">
            <h3>{item.nombre}</h3>
            <img src={item.img} alt={item.nombre}/>
            <p className="descripcion-producto">{item.descripcion}</p>
            <p className="precio"><strong>Precio: ${item.precio}</strong></p>
            <div className="addItem">
                <ItemCount cantidad={cantidad} 
                sumarprod={sumarprod} 
                restarprod={restarprod} 
                botonAgregarCarrito={()=>{botonAgregarCarrito(item, cantidad)}}
                />
            </div>
        </div>
    )
}

export default ItemDetail