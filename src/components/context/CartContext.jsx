import { react, createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();
const carritoInicial = JSON.parse (localStorage.getItem ("carrito")) || []; 
export const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(carritoInicial);
    const botonAgregarCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };
        const carritoNuevo = [...carrito];
        const estaEnElCarrito = carritoNuevo.find((item) => item.id === itemAgregado.id);
        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
            setCarrito(carritoNuevo);
        } else {
            carritoNuevo.push(itemAgregado);
            }
        setCarrito(carritoNuevo);
        };
        const cantidadEnCarrito = () => {
            return carrito.reduce((acc, item) => acc + item.cantidad, 0);
        };
        const totalDeCompra = () => {
            return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
        };
        const botonVaciarCarrito = () => {
            setCarrito([]);
        };
        useEffect (()=>{
            localStorage.setItem("carrito", JSON.stringify(carrito))
        },[carrito])
    return (
        <CartContext.Provider value={{carrito, botonAgregarCarrito, cantidadEnCarrito, totalDeCompra, botonVaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
};
