let navbar=document.querySelector(".navbar");
let searchForm=document.querySelector(".search-form");
let cartItem=document.querySelector(".cart-items-container");


document.querySelector("#search-btn").onclick=()=>{
searchForm.classList.toggle("active") ;      // toggle --illana add pannum irundha remove pannum
navbar.classList.remove("active");
cartItem.classList.remove("active")
};

document.querySelector("#cart-btn").onclick=()=>{
    cartItem.classList.toggle("active");
    searchForm.classList.remove("active") ;      // toggle --illana add pannum irundha remove pannum
navbar.classList.remove("active");
}


document.querySelector("#menu-btn").onclick=()=>{
    navbar.classList.toggle("active");
    cartItem.classList.remove("active");
    searchForm.classList.remove("active") ;  
}

window.onscroll=()=>{
    navbar.classList.remove("active");
    cartItem.classList.remove("active");
    searchForm.classList.remove("active") ;  
}