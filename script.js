                 // navbar
function mynav() {
    let bar=document.querySelector(".bar"),
    links=document.querySelector(".nav-links");
    
    bar.addEventListener("click",() =>{
        links.classList.toggle("display");
        bar.children[0].classList.toggle("toggle1");
        bar.children[1].classList.toggle("toggle2");
        bar.children[2].classList.toggle("toggle3");
    });
}
               /*----end---*/
