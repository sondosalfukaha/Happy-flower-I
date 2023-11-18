/*Start pre-Loader Function */
let preloader = document.getElementById("preloader");
window.addEventListener("load",function(){
    preloader.style.display = "none";
});
/* End pre-Loader Function */
/* Start Top Button */

let span = document.querySelector(".moveToTheTop");
window.onscroll = function() {
    if( this.scrollY >= 100){
        span.classList.add("show")
    }
    else{
        span.classList.remove("show");
    }
}
span.onclick = function() {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
}
/* End Top Button */
/*Search button */
function showandHideSearchTxt(){
    let box = document.getElementById("search-txt");
    

    if(box.style.display == "none"){
        box.style.display = "block";
    }
        else{
            box.style.display = "none";
        }
    }
