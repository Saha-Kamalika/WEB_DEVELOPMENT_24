import products from "./api/products.json";
import { getCartProductFromLS } from "./getCartProductFromLS";
let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((currProd)=>{
    return cartProducts.some((currElem)=> currElem.id === currProd.id);
})
console.log(filterProducts);

const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () =>{
    filterProducts.forEach((currProd)=>{
        const {category, id, image, name, stock, price} = currProd;
        let productClone = document.importNode(templateContainer.content, true);
        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        cartElement.append(productClone);
    })
}
showCartProduct();