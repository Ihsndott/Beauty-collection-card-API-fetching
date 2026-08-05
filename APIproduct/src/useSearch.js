import { useState } from "react";

function useSearch(products){

    const[search,setSearch] = useState("");

    const filteredItems = products.filter((dofilter)=>{
      return  dofilter.category.toLowerCase().trim().includes(search.toLowerCase().trim())
    }
    )

    return{search,setSearch,filteredItems};



    
}

export default useSearch;