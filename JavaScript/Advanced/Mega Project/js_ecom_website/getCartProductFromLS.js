import { updateCartValue } from "./updateCartValue";

export const getCartProductFromLS = ()=>{
    let cartProducts= localStorage.getItem("cartProductsLS");
    if(!cartProducts) return [];
    cartProducts=JSON.parse(cartProducts);
    updateCartValue(cartProducts);
    return cartProducts;
}