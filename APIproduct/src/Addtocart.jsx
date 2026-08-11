//  This page is created for crud operations in this ecommerce page

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faLock} from "@fortawesome/free-solid-svg-icons"
import {faRetweet} from "@fortawesome/free-solid-svg-icons"
import {faCreditCard} from "@fortawesome/free-solid-svg-icons"
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"



//function for Save the selected product in localStorage.
function Addtocart(){

      const [cartitems,setCartitems] = useState([])

      useEffect(()=>{
        
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartitems(cart);
      
      },[]);

// Function to delete the selected card when the remove icon is clicked.
function Delete(id){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const updatedCart = cart.filter((item) => item.id !==id);

    setCartitems(updatedCart);

     localStorage.setItem("cart",JSON.stringify(updatedCart));

};

//Function to delete all the card from localstorage
function ClearAll(){
  setCartitems([]);
  localStorage.clear();
  
}

//function to increase the quantity in a shopping card
function Increaseqty(id){

     const updatedCart = cartitems.map((item)=>{

      if(item.id === id){
        return{...item,quantity:item.quantity+1}
      }
      return item;
     })
    setCartitems(updatedCart);
    localStorage.setItem("cart",JSON.stringify(updatedCart));
}

//function to decrease the quantity in a shopping card
function decreaseqty(id){

     const updatedCart = cartitems.map((item)=>{

      if(item.id === id && item.quantity >1){
        return{...item,quantity:item.quantity-1}
      }
      return item;
     })
    setCartitems(updatedCart);
    localStorage.setItem("cart",JSON.stringify(updatedCart));
}

//summary operations for calculate the subtotal , discount and total
  const subtotal = cartitems.reduce((total,item)=>{
  return total + item.price*item.quantity;
  },0);

  const discount = subtotal*0.10;

  const total = subtotal - discount;
      
  
    return (
        <>
         <div>
        <h1 className="text-4xl font-bold mt-20  text-center text-[#4e3a4e] ">Premium Beauty Collection</h1>
        <h4 className="text-xl font-semibold text-center">Discover premium beauty products, including makeup essentials and cosmetics, carefully selected to help you look and feel your best.</h4>
       </div>

       <div className="flex flex-row justify-between items-center md:mr-4">

    <div>
    <h1 className="text-4xl font-bold m-12" >Shopping  Cart</h1>
    <h4 ></h4>
    </div>
    <button onClick={ClearAll} className="text-white bg-red-700 rounded-full px-4 py-2 font-semibold" > Clear All</button>
</div>

<div className="flex flex-col md:flex md:flex-row justify-between">
 <div className="flex flex-col gap-4 ml-12">
      {cartitems.map((item)=> (
        
        <div key={item.id} className="flex flex-row items-center justify-between gap-4 border rounded-xl border-gray-500 py-2 bg-white/50 w-[200px] md:w-[850px] h-[200px]  p-4">
        <div className="flex flex-row items-center gap-4  border-gray-500 py-4">
            <img src={item.images[0]} alt="image" className="bg-white/80 rounded w-32 h-32 object-cover"/>
            <div className= "md:ml-4">
                <h3 className="text-black text-xl">{item.title}</h3>
                <p className="text-black">${item.price}</p>
            </div>
          <div className=" flex flex-col">   
        <div className= "flex flex-row gap-0 ml-[250px]" >
            <button onClick={()=>decreaseqty(item.id)}   className="decreasebtn px-4 rounded-bl rounded-tl  text-white bg-[#4e3a4e]">−</button>
            <p className="quantitynum bg-[#4e3a4e] text-white" >{item.quantity}</p>
          <button  onClick={()=>Increaseqty(item.id)} className="increasebtn px-4 bg-[#4e3a4e] rounded-br text-white rounded-tr">+</button>
        </div>
        <div >
             <p className="qprice text-black mt-6 ml-[250px] text-lg font-semibold" >${item.price}</p>
          </div>
          <div className= "mt-4"  >
          <button id="removebutton"onClick={()=> Delete(item.id)} className="text-red-700 text-sm ml-[250px]"><FontAwesomeIcon icon={faTrash} />Remove </button>
            </div>
            </div>
            </div>
            </div>
           
      ))}
       </div>



 {/* Summary of shopping */}

<div id="summary"className="w-[400px] h-fit mt-12  rounded-xl bg-white/50 border border-gray-500 ml-4 md:ml-0  md:mr-20">
     <p className="text-black font-bold p-4 text-xl">Order Summary</p>
     <div className="flex flex-row justify-between mx-6">
     <p>Subtotal</p>
     <p id="subtotal">$ {subtotal.toFixed(2)}</p>
     </div>
     <div className="flex flex-row justify-between mx-6">
     <p >Discount(10%)</p>
     <p id="discount">$ {discount.toFixed(2)} </p>
     </div>
     <div className="flex flex-row justify-between mx-6 mb-4" >
     <p>Shipping</p>
     <p className="text-red-700">FREE</p>
     </div>
     <hr className="border-[#4e3a4e] mx-4"/>
     <div className="flex flex-row justify-between mx-6 mb-4 mt-4 text-xl font-semibold">
      <p >Total</p>
      <p id="tot">$ {total.toFixed(2)}</p>
     </div>
      <hr className="border-[#4e3a4e] mx-4"/>
      <div>
        <button className="bg-[#4e3a4e] rounded-full text-white flex items-center px-12 py-4 mt-4 ml-20 transition duration-300 active:scale-95">Proceed to Checkout</button>
        <button className=" rounded-full text-[#4e3a4e] flex items-center px-12 py-4 mt-2 ml-20 transition duration-300 active:scale-95"> ← Continue Shopping</button>
      </div>

       <div className="bg-indigo-700/10 w-[350px] rounded-xl m-6 p-4 flex flex-col gap-2">
        <div >
          <p className="flex gap-3 items-center"><FontAwesomeIcon icon={faLock} />Secure Checkout </p> 
        </div>
        <div>
         <p className="flex gap-2 items-center">  <FontAwesomeIcon icon={faCreditCard}/> Multiple Payment Option </p> 
        </div>
        <div>
         <p className="flex gap-2 items-center">  <FontAwesomeIcon icon={faRetweet} /> Free Returns </p> 
        </div>
      </div> 
</div>

</div>
</>
    )
}

export default Addtocart