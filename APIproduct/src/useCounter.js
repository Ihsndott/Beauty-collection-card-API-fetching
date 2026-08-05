import { useState } from "react";

function useCounter () {

    const [count, setCount] = useState(0);

    function increment(){
        setCount(count+1);
    }

     function decrement(){
        do{
        setCount(count-1);}
        while (count===0)
    }



    return{count,increment,decrement};

    
}

export default useCounter;