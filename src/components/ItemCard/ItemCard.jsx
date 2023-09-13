import "./ItemCard.css"
import { Link } from "react-router-dom"

export const ItemCard = ({item}) => {
    return 	(
        (
            <div className="cards">
                <h3>{item.nombre}</h3>
                <img src={item.img} alt={item.nombre}/>
                <p className="descripcionProd">{item.descripcion}</p>
                <p className="precioProd"><strong>Precio: ${item.precio}</strong></p>
                <Link to={`/detail/${item.id}`}><button>Ver mas</button></Link>
            </div>
            )
    ) 	
}

export default ItemCard