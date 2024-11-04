import { useEffect, useState } from "react";
import { getAllCartProduct, removeCartedProduct } from "../Utilities";
import CartTODashboard from "../Components/CartTODashboard";
import { NavLink } from "react-router-dom";

const Cart = () => {
    const [products, setProduct] = useState([]);
    const [sorted, setSorted] = useState(true)
    useEffect(() => {
        const carts = getAllCartProduct();
        setProduct(carts)
    }, [])
    const handleRemove = (product_id) => {
        // console.log('remove p with id', product_id)

        removeCartedProduct(product_id);
        const carts = getAllCartProduct();
        setProduct(carts)
    }
    const handleSort = () => {
        setSorted(!sorted)
    }
    const sortedProducts = [...products].sort((a, b) => {
        return sorted ? a.price - b.price : b.price - a.price;
    })
    const totalCost = products.reduce((total, product)=> total + product.price, 0)
    return (
        <div>
            <div className="flex justify-between px-5 py-10">
                <h3 className='font-sora font-bold text-2xl'>Cart</h3>
                <div className='flex items-center gap-3'>
                    <h3 className='font-sora font-bold text-2xl flex items-center justify-center'><span>Total Cost: {totalCost} </span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </h3>
                    <NavLink className={`font-sora font-semibold px-4 py-2 btn-outline outline-purple-600 text-purple-600 rounded-2xl
                         ${sorted ? 'btn btn-sm' : ' bg-purple-700 text-purple-50'}`}
                        onClick={handleSort}
                    >Sort By Price</NavLink>
                    <NavLink className={({ isActive }) => `font-sora font-semibold px-4 py-2 btn-outline outline-purple-600 text-purple-600 rounded-2xl 
                        ${isActive ? 'btn btn-sm' : ''}`}
                    >Parchase</NavLink>
                </div>
            </div>
            {
                sortedProducts.map(product => <CartTODashboard key={product.product_id} handleRemove={handleRemove} product={product}></CartTODashboard>)
            }
        </div>
    );
};

export default Cart;