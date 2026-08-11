import { useState } from "react";

function useCounter () {

    const [count, setCount] = useState(1);

    function increment(){
        setCount(count+1);
    }

     function decrement(){
        if (count>0){
        setCount(count-1);
        }
        
    }



    return{count,increment,decrement};

    
}

export default useCounter;