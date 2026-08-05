import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faEye} from "@fortawesome/free-solid-svg-icons"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import {faSearch} from "@fortawesome/free-solid-svg-icons"



function Navbar({search, setSearch}){



    return(
        <div className="flex items-center justify-between">
            {/* logo */}
            <div className="flex flex-row items-center">
               <FontAwesomeIcon icon={faEye} className="text-3xl text-[#4e3a4e] mt-6 ml-6"/>
               <p className="text-3xl text-[#4e3a4e] mt-6 font-bold " >Beauty</p>
            </div>

            {/* menu */}
            <div className="flex flex-row gap-8 mt-6 cursor-pointer ">
                <p className="text-2xl text-black hover:text-[#e739a2] font-semibold transition active:scale-95">Home</p>
                <p className="text-2xl text-black hover:text-[#e739a2] font-semibold transition active:scale-95">About</p>
                <p className="text-2xl text-black hover:text-[#e739a2] font-semibold transition active:scale-95">Services</p>
                <p className="text-2xl text-black hover:text-[#e739a2] font-semibold transition active:scale-95">Contact</p>
            </div>

            {/*icon*/}
            <div className="cursor-pointer ">
                <input name="search" id="search" type="text" placeholder="Search here..." value={search} onChange={(event)=>setSearch(event.target.value)} className="w-[200px] h-[30px] border pl-2 mr-2 rounded"/>
                <FontAwesomeIcon icon={faSearch} className=" text-3xl text-[#4e3a4e] mt-6 mr-2"/>
                <FontAwesomeIcon icon={faShoppingCart} className="transition active:scale-95 text-3xl text-[#4e3a4e] mt-6 mr-6"/>
            </div>
        </div>
    )
}

export default Navbar