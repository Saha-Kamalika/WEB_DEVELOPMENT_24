import { getCartProductFromLS } from "./getCartProductFromLS"

export const updateCartProductTotal = () =>{
    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");
    let cartProducts = getCartProductFromLS();
    let totalProdPrice = cartProducts.reduce((acc, curr)=> {
        let prodPrice = parseInt(curr.price) || 0;
        return acc+=prodPrice;
    }, 0);
    productSubTotal.textContent = `₹${totalProdPrice}`;
    productFinalTotal.textContent = `₹${totalProdPrice+50}`;
}