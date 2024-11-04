import { useEffect, useState } from "react";
import { getAllCartProduct } from "../Utilities";
import CartTODashboard from "../Components/CartTODashboard";

const Cart = () => {
    const [products, setProduct] = useState([]);
    useEffect(()=>{
        const carts = getAllCartProduct();
        setProduct(carts)
    }, [])
    return (
        <div>
        {
            products.map(product=> <CartTODashboard key={product.product_id} product={product}></CartTODashboard>)
        }
    </div>
    );
};

export default Cart;