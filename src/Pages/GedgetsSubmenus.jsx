import { useLoaderData, useParams } from "react-router-dom";
import Submenu from "./Submenu";
import Products from "./Products";

const GedgetsSubmenus = () => {
    const {categories, products} = useLoaderData();
    const {category} = useParams();
    // console.log(category)
    const filteredProducts = category === 'All Products' || !category
          ? products : products.filter((product)=> product.category === category);
    // console.log(categories, products)
    return (
        <div>
            <div className="px-8 py-12 ">
                <h1 className="font-sora font-bold text-4xl text-center">Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className="grid md:grid-cols-4 mt-8">
                <div className="col-span-1">
                    <Submenu categories={categories}></Submenu>
                </div>
                <div className="col-span-3">
                    <Products products={filteredProducts}></Products>
                </div>
            </div>
        </div>
    );
};

export default GedgetsSubmenus;