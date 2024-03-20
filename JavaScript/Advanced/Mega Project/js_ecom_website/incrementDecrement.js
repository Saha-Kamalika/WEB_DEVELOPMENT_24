//import { l } from "vite/dist/node/types.d-FdqQ54oU";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) =>{
    const currentCardElement = document.querySelector(`#card${id}`);
    const productQuantity = currentCardElement.querySelector(".productQuantity");
    const productPrice = currentCardElement.querySelector(".productPrice");
    let quantity = 1;
    let localStoragePrice = 0;
    let localCartProducts = getCartProductFromLS();
    let existingProd = localCartProducts.find((curr) => curr.id === id);
    if(existingProd){
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;
    }
    else{
        localStoragePrice = price;
        price = price;
    }
    if(event.target.className === "cartIncrement"){
        if(quantity<stock) quantity+=1;
        else {
            quantity=stock;
            localStoragePrice = price*stock;
        }
    }
    if(event.target.className === "cartDecrement"){
        if(quantity>1) quantity-=1;
    }
    localStoragePrice = price*quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));
    let updatedCart = {id,quantity, price: localStoragePrice};
    updatedCart = localCartProducts.map((currProd)=>{
        return currProd.id === id ? updatedCart : currProd;   //was not functioning using if-else
    });
    // console.log(updatedCart);
    productQuantity.textContent = quantity;
    productPrice.textContent = `₹${localStoragePrice}`;
    localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));
    updateCartProductTotal();
}