const nav=document.querySelector("nav"),body=document.querySelector("main"),overlay=document.querySelector(".overlay"),exit=document.getElementById("x"),menu=document.getElementById("menu");open=(e=>{e.preventDefault(),nav.style.display="flex",nav.style.animation=".5s ease forwards navOpen",body.style.animation=".5s ease forwards slideRight",overlay.style.display="block"}),close=(()=>{nav.style.animation=".5s ease forwards navClose",body.style.animation=".5s ease forwards slideLeft",overlay.style.display="none"}),exit.addEventListener("click",close),menu.addEventListener("click",open);