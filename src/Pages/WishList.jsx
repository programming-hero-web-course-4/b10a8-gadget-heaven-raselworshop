import { useEffect, useState } from "react";
import { getAllWishProduct } from "../Utilities";
import WishlistToDasboard from "../Components/WishlistToDasboard";

const WishList = () => {
    const [wishProduct, setWishProduct] = useState([]);
    useEffect(()=>{
        const wishlist = getAllWishProduct();
        setWishProduct(wishlist)
    }, [])
    return (
        <div>
            <div className="flex justify-between px-5 py-10">
                <h3 className='font-sora font-bold text-2xl'>Wish List</h3>
                
            </div>
            {
                wishProduct.map(product => <WishlistToDasboard key={product.product_id} product={product}></WishlistToDasboard>)
            }
        </div>
    );
};

export default WishList;