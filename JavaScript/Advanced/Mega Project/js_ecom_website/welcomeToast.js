export const welcomeToast = () =>{
    const toast = document.createElement("div");
    toast.classList.add("toast");

    toast.textContent = `Welcome!, Start adding products in your cart`;
    document.body.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    },2000);
}