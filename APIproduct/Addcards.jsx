

function Addcards (product){


    //Read the card from local storage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    

    //Add the current clickable product
    cart.push({
        ...product,
        quantity:1
    });
    
    //save the updated cart in localstorage
    localStorage.setItem("cart",JSON.stringify(cart));
}

export default Addcards