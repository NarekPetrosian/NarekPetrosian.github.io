let x = 1;

function menu(){
    if(x === 1){
    document.querySelector(".sp1").style.visibility = "hidden";
    document.querySelector(".sp2").style.visibility = "visible";
    document.querySelector(".menu-bar").style.top = "60px"
    x++;
    }else{
    document.querySelector(".sp1").style.visibility = "visible";
    document.querySelector(".sp2").style.visibility = "hidden";
    document.querySelector(".menu-bar").style.top = "-250px"
    x--;
    }
}    