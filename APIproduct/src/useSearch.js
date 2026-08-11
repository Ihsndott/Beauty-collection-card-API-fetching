

function useSearch(products,search){


    const filteredItems = products.filter((dofilter)=>{
      return  dofilter.category.toLowerCase().trim().includes(search.toLowerCase().trim())
    }
    )

    return{filteredItems};



    
}

export default useSearch;