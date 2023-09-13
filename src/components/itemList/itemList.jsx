import ItemCard from "../ItemCard/ItemCard"
import "./itemList.css"


const ItemList = ({items}) =>{
    return(
        <div>
            <h2>productos</h2>
            <div className="contenedor-cards">
                {
                items.map((prod)=> <ItemCard item={prod} key={prod.id}/>)
                }
            </div>
        </div>
    )
}


export default ItemList
