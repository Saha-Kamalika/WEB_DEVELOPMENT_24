import { getCartProductFromLS } from "./getCartProductFromLS"
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id) =>{
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curr)=> curr.id !== id);
    localStorage.setItem("cartProductsLS", JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);
    console.log(removeDiv);
    if(removeDiv){
        removeDiv.remove();
    }
    updateCartValue(cartProducts);
}