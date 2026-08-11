import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBars, faEye, faShoppingCart, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons"
import { NavLink } from "react-router-dom"
import { useContext, useState } from "react"
import { searchContext } from "./Layout"


  const NavlinkStyle = ({isActive}) => `text-2xl  font-semibold transition active:scale-95 ${ isActive? "text-white" : "text-black" }`


function Navbar(){

    const [open, setOpen] = useState(false)

 const {search,setSearch} = useContext(searchContext)
 const{cartcount , setCartcount} = useContext(searchContext)  


    return(
 <>

        <div className="flex items-center justify-between">
            {/* logo */}
            <div className="flex flex-row items-center">
               <FontAwesomeIcon icon={faEye} className="text-3xl text-[#4e3a4e] mt-6 ml-6"/>
               <p className="text-3xl text-[#4e3a4e] mt-6 font-bold " >Beauty</p>
            </div>

            {/* menu */}
             <div className="hidden md:block md:flex flex-row gap-8 mt-6 cursor-pointer ">
                <NavLink to="/" className={NavlinkStyle} >Home</NavLink>
                <NavLink to="/About" className={NavlinkStyle} >About</NavLink>
                <NavLink to="/Services" className={NavlinkStyle} >Services</NavLink>
                <NavLink to="/Contact" className={NavlinkStyle} >Contact</NavLink>
            </div>

            {/*icon*/}
            <div className=" cursor-pointer flex">
                <div className="hidden md:block" >
                <input name="search" id="search" type="text" placeholder="Search here..." value={search} onChange={(event)=>setSearch(event.target.value)} className="w-[200px] h-[30px] border pl-2 mr-2 mt-6 rounded"/>
                <FontAwesomeIcon icon={faSearch} className="text-3xl text-[#4e3a4e] mt-6 mr-2"/>
                </div>
                <NavLink to="/Addtocart" >
                <div className="flex flex-row relative" >
                    <FontAwesomeIcon icon={faShoppingCart} className="transition active:scale-95 text-3xl text-[#4e3a4e] mt-8 md:mt-6 md:mr-6"/>
                    <p className="text-md font-bold absolute ml-8 mt-3 md:mt-0 ">{cartcount.length}</p>
                </div>
                 </NavLink>

                   {/* <!--Hamburger Button--> */}
                    <div className="md:hidden">
                    <button id="ham-button" onClick={()=>{setOpen(!open)}} className="text-3xl font-bold text-red-700 m-2">
                    <FontAwesomeIcon icon={open?faXmark:faBars} className=" text-3xl text-[#4e3a4e] mt-6 mr-6"/>
                    </button>
                    </div>
            </div>
        </div>

        {/* <!--Mobile-menu--> */}

<div id="mbmenu" className={`${open ? "block" : "hidden"} md:hidden`} >
    <div className="flex flex-col gap-4 justify-center items-center bg-transparent">
         <div >
                <input name="search" id="search" type="text" placeholder="Search here..." value={search} onChange={(event)=>setSearch(event.target.value)} className="w-[200px] h-[30px] border pl-2 mr-2 mt-6 rounded"/>
                <FontAwesomeIcon icon={faSearch} className="text-3xl text-[#4e3a4e] mt-6 mr-2"/>
                </div>

                <NavLink to="/" className={NavlinkStyle} >Home</NavLink>
                <NavLink to="/About" className={NavlinkStyle} >About</NavLink>
                <NavLink to="/Services" className={NavlinkStyle} >Services</NavLink>
                <NavLink to="/Contact" className={NavlinkStyle} >Contact</NavLink>
    </div>
</div>
</>
    )


}

export default Navbar