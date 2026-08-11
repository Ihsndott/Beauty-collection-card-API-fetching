import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { useState, createContext } from "react";



export const searchContext = createContext();


function Layout(){

 const [search,setSearch] = useState("")
 const [cartcount,setCartcount] = useState([]);
 
    
    return(
         <>
      <searchContext.Provider value={{search,setSearch,cartcount,setCartcount}}> 
           <Navbar/>
           <Outlet/>
      </searchContext.Provider>     
         </>
    )
}

export default Layout;