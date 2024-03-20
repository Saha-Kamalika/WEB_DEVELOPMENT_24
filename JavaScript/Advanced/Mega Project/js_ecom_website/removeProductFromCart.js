import { getCartProductFromLS } from "./getCartProductFromLS"
import { showToast } from "./showToast";
import { updateCartProductTotal } from "./updateCartProductTotal";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id) =>{
    const cartValue = document.querySelector("#cartValue");
    let productFinalTotal = document.querySelector(".productFinalTotal");
    let productSubTotal = document.querySelector(".productSubTotal");

    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curr)=> curr.id !== id);
    localStorage.setItem("cartProductsLS", JSON.stringify(cartProducts));

    let removeDiv = document.getElementById(`card${id}`);
    console.log(removeDiv);
    if(removeDiv){
        removeDiv.remove();
        showToast("delete", id);
    }
    updateCartValue(cartProducts);
    // if(cartValue.innerHTML === `<i class="fa-solid fa-cart-shopping"><p>0</p></i>`){
    //     productFinalTotal.textContent = `₹0`;
    // }
    if(cartValue.innerText == "0"){
        productSubTotal.innerHTML = `₹0`;
        productFinalTotal.innerHTML = `₹50`;
    }
    else updateCartProductTotal();
}