import { useEffect, useState } from "react"
import { pedirDatos } from "../Helper/pedirDatos"
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import {doc , getDoc} from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemDetailContainer = () => {

    const [item, setItem] = useState ([null])
    const [loading, setLoading] = useState([true])

    const { itemId } = useParams();

    useEffect(() => {
        const docRef = doc(db, "productos", itemId);
        getDoc(docRef)
            .then((res) => {
                setItem(
                    {...res.data(), id: res.id}
                );
            })
            .finally (()=>{
                setLoading(false)
            })
    }, [itemId]);
    return 	(
        <div className="contenedorDetail">
            {
                loading
                ? <h2>Cargando...</h2>
                :<ItemDetail item={item}/>
            }
        </div>	
    ) 	
}

export default ItemDetailContainer