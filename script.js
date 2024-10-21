"use strict";
let modal = document.querySelector(".modal-close");
let nav = document.querySelector(".nav");
let navBar = document.querySelector(".nav-bar");

modal.addEventListener("click", function(){
      nav.classList.toggle("modal-close-closed");
      modal.classList.toggle("modal-close-closed");
      navBar.classList.toggle("nav-bar-hide");

})

navBar.addEventListener("click", function(){
    console.log("click");
    nav.classList.toggle("modal-close-closed");
    modal.classList.toggle("modal-close-closed");
    navBar.classList.toggle("nav-bar-hide");
   
})





