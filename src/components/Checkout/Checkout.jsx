import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import "./Checkout.css"
import { useForm } from "react-hook-form"
import { collection, addDoc } from "firebase/firestore"
import { db } from '../../firebase/config'

const Checkout = () => {
    const {carrito, totalDeCompra, botonVaciarCarrito} = useContext(CartContext);
    const [pedidoId, setPedidoId] = useState ("")
    const { register, handleSubmit } = useForm();
    const terminarCompra = (data) =>{
        const pedido = {
            cliente : data,
            carrito: carrito,
            total: totalDeCompra(),
        }
        console.log(pedido)
        const pedidosRef = collection (db, "pedidos");
        addDoc(pedidosRef, pedido)
            .then ((doc)=>{
                setPedidoId (doc.id);
                botonVaciarCarrito();
            })
    }
    if (pedidoId) {
        return (
        <div className='contenedor-pedido-hecho'>
            <div className='contendor-checkout'>
                <div className='contenedor titulo-pedido-hecho'>
                    <h1 className='titulo-pedido-hecho'>Muchas gracias por tu compra</h1>
                </div>
                <div className='tu-id-pedido'>
                    <p>Este es tu numero de pedido: { pedidoId }.</p>
                </div>
            </div>
        </div>
        )
    }
    return (
        <div className='contenedor'>
            <div className='main'>
                <div className='titulo'>
                    <h1>Pasemos al final de tu compra</h1>
                </div>
                <div>
                    <h1 className='pedirDatos'>
                        Pasaremos a pedirte algunos datos a continuacion...
                    </h1>
                </div>
                <section className='seccion-form'>
                    <form className='formulario' onSubmit= {handleSubmit(terminarCompra)} >
                        <input className="usuario" type="text" placeholder='Ingresá tu usuario' {...register("usuario")}/>
                        <input className="nombre" type="text" placeholder='Ingresá tu nombre' {...register("nombre")}/>
                        <input className="telefono"  type="text"  placeholder='Ingresá tu telefono' {...register("telefono")}/>
                        <input  className='email'  type="email"  placeholder='Ingresá tu email' {...register("email")} />
                        <button className='enviar' type='submit'>enviar</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default Checkout