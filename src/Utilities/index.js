import { toast } from "react-toastify";

// get all product from local storage 
const getAllCartProduct = () => {
    const cartedProduct = localStorage.getItem('cart')
    if (cartedProduct) {
        const product = JSON.parse(cartedProduct);
        // console.log(product)
        return product;
    } else {
        // console.log([])
        return [];
    }
}

//set/add product to local storage
const addCart = product => {
    // console.log(product)
    const carts = getAllCartProduct() || [];
    const isExist = carts.find((item) => item.product_id === product.product_id);
    // console.log(carts)

    if (isExist) {
        toast.error('Product already Exist!!')
        
    } else {
        carts.push(product);
        localStorage.setItem('cart', JSON.stringify(carts))
        toast.success('Product added to cart !!');
       
    }
}

//remove product from local storage


export { addCart, getAllCartProduct }