import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCartValue } from "./updateCartValue";
getCartProductFromLS();
export const addToCart = (event, id, stock) =>{
    
    let arrLocalStorage = getCartProductFromLS();
    const currentProdElem = document.querySelector(`#card${id}`);
    let quantity = currentProdElem.querySelector(".productQuantity").innerText;
    let price = currentProdElem.querySelector(".productPrice").innerText;
    // console.log(quantity, price);
    price = price.replace("₹","");
    

    let existingProd = arrLocalStorage.find((curr)=> curr.id === id);  //existing product
    console.log(existingProd);
    if(existingProd && quantity>1){
        quantity = Number(existingProd.quantity) + Number(quantity); //updated quantity = prev+curr
        price = Number(price*quantity);
        let updatedCart = {id,quantity, price};
        updatedCart = arrLocalStorage.map((currProd)=>{
            return currProd.id === id ? updatedCart : currProd;   //was not functioning using if-else
        });
        // console.log(updatedCart);
        localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));
    }
    if(existingProd) return false;

    price = Number(price*quantity);
    quantity = Number(quantity);
    arrLocalStorage.push({id, quantity, price});
    localStorage.setItem("cartProductsLS", JSON.stringify(arrLocalStorage));

    updateCartValue(arrLocalStorage);

}