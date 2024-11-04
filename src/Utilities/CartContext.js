// import { createContext, useEffect, useState } from "react";

// export const CartContext = createContext();

// const CartProvider = ({children})=>{
//     const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
//     const [cart, setCart] = useState(initialCart);

//     const addToCart = (product)=>{
//         const updatedCart = [...cart, product];
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart)) 
//     }

//     const removeFromCart = (productId)=>{
//         const updatedCart = cart.filter((item)=> item.product_id !== productId);
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart))
//     }
//     useEffect(()=>{
//         localStorage.setItem('cart', JSON.stringify(cart))
//     }, [cart]);

//     return (
//         <CartContext.Provider
//             value={{cart, addToCart, removeFromCart}}
//         >{children}</CartContext.Provider>
//     )
// }

// export default CartProvider;