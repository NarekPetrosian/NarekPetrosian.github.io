document.querySelector(".ham1").addEventListener("click", function(){
    document.querySelector(".cls1").style.display = "flex";
    document.querySelector(".ham1").style.display = "none";
    document.querySelector(".list2").classList.add("go1");
});

document.querySelector(".cls1").addEventListener("click", function(){
    document.querySelector(".ham1").style.display = "flex";
    document.querySelector(".cls1").style.display = "none";
    document.querySelector(".list2").classList.remove("go1");        
});