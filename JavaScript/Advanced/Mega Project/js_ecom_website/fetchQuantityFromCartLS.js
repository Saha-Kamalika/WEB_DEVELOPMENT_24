import { getCartProductFromLS } from "./getCartProductFromLS"

export const fetchQuantityFromCartLS = (id,price) =>{
    let cartProducts = getCartProductFromLS();
    let existingProduct = cartProducts.find((curr)=>curr.id === id);
    let quantity=1;
    if(existingProduct){
        quantity = existingProduct.quantity;
        price = existingProduct.price;
    }
    return {quantity,price};
}