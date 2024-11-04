import { useEffect, useState } from "react";
import { getAllCartProduct, removeCartedProduct } from "../Utilities";
import CartTODashboard from "../Components/CartTODashboard";
import { NavLink } from "react-router-dom";

const Cart = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        const carts = getAllCartProduct();
        setProduct(carts)
    }, [])
    const handleRemove= (product_id) => {
        console.log('remove p with id', product_id)
    
        removeCartedProduct(product_id);
        const carts = getAllCartProduct();
        setProduct(carts)
    }
    return (
        <div>
            <div className="flex justify-between px-5 py-10">
                <h3 className='font-sora font-bold text-2xl'>Cart</h3>
                <div className='flex items-center gap-3'>
                    <h3 className='font-sora font-bold text-2xl'>Total Cost:0</h3>
                    <NavLink className={({isActive})=>`font-sora font-semibold px-4 py-2 btn-outline outline-purple-600 text-purple-600 rounded-2xl
                         ${isActive? 'btn btn-sm':''}`}
                        >Sort By Price</NavLink>
                    <NavLink className={({isActive})=>`font-sora font-semibold px-4 py-2 btn-outline outline-purple-600 text-purple-600 rounded-2xl 
                        ${isActive? 'btn btn-sm':''}`}
                        >Parchase</NavLink>
                </div>
            </div>
            {
                products.map(product => <CartTODashboard key={product.product_id} handleRemove={handleRemove} product={product}></CartTODashboard>)
            }
        </div>
    );
};

export default Cart;