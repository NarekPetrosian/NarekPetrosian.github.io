    document.querySelector(".circ1").addEventListener("click", function(){
        document.querySelector(".popup3").style.display = "flex";
        document.querySelector("html").style.overflowY = "hidden";
    })

    document.querySelector(".circ2").addEventListener("click", function(){
        document.querySelector(".popup1").style.display = "flex";
        document.querySelector("html").style.overflowY = "hidden";
    })

    document.querySelector(".btn2").addEventListener("click", function(){
        document.querySelector(".popup1").style.display = "none";
        document.querySelector("html").style.overflowY = "visible";
    })

    document.querySelector(".btn4").addEventListener("click", function(){
        document.querySelector(".popup3").style.display = "none";
        document.querySelector("html").style.overflowY = "visible";
    })
    

        let a = 0;

    document.querySelector(".btn5").addEventListener("click", function(){

        if(a === 0){
            document.querySelector(".emp0").classList.add("ig2");
            document.querySelector(".emp0").classList.remove("ig1");
            a++;
        }
        else if(a === 1){
            document.querySelector(".emp0").classList.add("ig3");
            document.querySelector(".emp0").classList.remove("ig2");
            a++;
        }
        else{
            document.querySelector(".emp0").classList.add("ig1");
            document.querySelector(".emp0").classList.remove("ig3");
            a = 0;
        }
    });