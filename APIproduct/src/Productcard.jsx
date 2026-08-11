
import { useContext } from "react";
import Product from "./Product";
import useCounter from "./useCounter";
import { searchContext } from "./Layout";
import Addcards from "../Addcards";





function Productcard(props){

    
const{count,increment,decrement} = useCounter();
const {cartcount,setCartcount} = useContext(searchContext)

//handling insertion of selected cards
function insertAddtoCart(){

    setCartcount(cartcount+1);

    Addcards({
        id:props.id,
        title:props.title,
        price: props.price,
        images:props.images,
        category:props.category,
        quantity:1
    });
}

    
    return(
        <>
        <div className="bg-white border border-2 border-[#59385a] w-[400px] h-[680px] rounded-xl">
        <img src={props.images} alt="product image" className="w-full h-[300px] object-cover rounded-2xl" />
        <div className="flex flex-row justify-between ml-2 mr-2">
            <p className="text-lg text-[#764977] font-semibold">{props.brand}</p>
            <div className="flex flex-row gap-1 ">
            
            <p className="font-bold text-gray-500">{props.rating}</p>
            </div>
        </div>
        <p className="text-xl text-[#8b3f8e]  font-bold ml-2">{props.title}</p>
        <p className="ml-2 text-sm">{props.description}</p>
        <p className="text-lg text-[#8b3f8e]  font-semibold ml-2 mt-2" > Category : {props.category}</p>
        <div className="text-lg text-[#764977] font-semibold ml-2 mt-2" > Qty : {count}  <button onClick={increment} className="bg-[#4e3a4e] ml-2 px-1 py-[1px] text-white cursor-pointer">+</button><button  onClick={decrement} className="bg-[#4e3a4e]  px-1 py-[1px] text-white cursor-pointer">−</button> </div>
         <div className="text-lg text-[#764977] font-semibold ml-2 mt-2" > Stock : {props.stock} </div>
        <p className="text-xl text-black font-bold ml-2 mt-2">{props.price}</p>
        <p className={props.availabilityStatus==="In Stock"?"text-green-500 font-bold ml-2":"text-red-500 font-bold ml-2"} > {props.availabilityStatus}</p>

        <div className="flex flex-row justify-between mt-4 ml-2 mr-6">
         <button onClick={insertAddtoCart} disabled={props.availabilityStatus !== "In Stock"} className="disabled:bg-red-400 bg-[#ba95bc] px-4 py-2 rounded-2xl font-bold active:scale-95">Add to Cart</button>
         <button  className="bg-[#4e3a4e]  text-white px-4 py-2 rounded-2xl font-bold active:scale-95">Buy Now</button>  
            
        </div>
       </div> 



        </>
    );
}

export default Productcard