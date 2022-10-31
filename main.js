 // cart
 let cartIcon = document.querySelector("#cart-icon");
 let cart = document.getElementById(".cart")
 let closeCart =document.querySelector("#close-cart");
 //open cart
 cartIcon.onclick=()=>{
    cart.classList.add("active"); 
 };
 //close cart 
 cartIcon.onclick = () => {
    cart.classList.remove("active");
 };
