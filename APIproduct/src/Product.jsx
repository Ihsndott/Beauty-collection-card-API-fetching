import { useState, useEffect } from "react"
import Productcard from "./Productcard";
import Navbar from "./Navbar";
import useSearch from "./useSearch";


function Product(){

const [product,setProduct] = useState([]);
const [error,setError] = useState(null);
const [visibleproducts, setVisibleproducts] = useState(6);


useEffect(()=>{
   
    fetch('https://dummyjson.com/products')
    .then((response)=> {
        if(!response.ok){
            throw new Error("Failed to load products.")
        }
        return response.json();
    })
    .then((data)=>{setProduct(data.products)})
    .catch(() =>{setError("Failed to load products.Please try again.")});

}, []);


const{search,setSearch,filteredItems} = useSearch(product);

const productList = filteredItems.slice(0,visibleproducts).map((item) =>
        <Productcard key={item.id} id={item.id} images={item.images} brand = {item.brand} 
         rating={item.rating} title={item.title} description={item.description} 
         stock={item.stock} price={item.price} availabilityStatus={item.availabilityStatus}
         category = {item.category}  />
     )

   
    return(
        <>
      
        <Navbar search={search} setSearch={setSearch}/>
        {error && <p>{error}</p>}
        <div className="bg-[#d3b3d5] p-8">
        <h1 className="text-4xl font-bold  text-center text-[#4e3a4e] ">Premium Beauty Collection</h1>
        <h4 className="text-xl font-semibold text-center">Discover premium beauty products, including makeup essentials and cosmetics, carefully selected to help you look and feel your best.</h4>
       </div>

       <div>
        <button onClick={() => {(setVisibleproducts(product.length))}} className="bg-[#4e3a4e] text-center mx-[670px] text-white px-4 py-2 rounded-2xl font-bold active:scale-95">Explore More</button>
       </div>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mt-6">
        {productList}
         </div>
         

        
                
        </>
    )
}

export default Product

