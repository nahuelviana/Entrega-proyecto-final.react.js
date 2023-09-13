import "./ItemListContainer.css"
import { pedirDatos } from "../Helper/pedirDatos"
import { useState, useEffect } from "react"
import "../itemList/itemList.css"
import ItemList from "../itemList/itemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from  "firebase/firestore";
import { db } from "../../firebase/config.js"

export const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const categoryId = useParams().categoryId;
    useEffect(() => {   
        const productosRef = collection(db, "productos");
        const filtro = categoryId ? query (productosRef, where ("categoria", "==", categoryId)) : productosRef;
        getDocs(filtro)
            .then((res) => {
                setProductos(
                    res.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })
            .finally (() => {
                setLoading(false)
            })
    }, [categoryId]);
    return(
        <div>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos}/>
            }
        </div>
    )
}


