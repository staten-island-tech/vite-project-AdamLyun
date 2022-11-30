import "../styles/style.css";
import { menu } from "./menu";
console.log(menu);

document.querySelector(".btn").addEventListener("click", function(){
    if(    document.body.classList.contains("lightmode")){  
     document.body.classList.add("darkmode");
     document.body.classList.remove("lightmode");
     document.body.style.color = 'black';
    }else{
        document.body.classList.add("lightmode");
        document.body.classList.remove("darkmode");
        document.body.style.color = 'white';
    };
})
;
document.querySelector(".btn2").addEventListener("click", function(){
    if(    document.body.classList.contains("lightmode")){  
     document.body.classList.add("darkmode");
     document.body.classList.remove("lightmode");
     document.body.style.color = 'green';
    }else{
        document.body.classList.add("lightmode");
        document.body.classList.remove("darkmode");
        document.body.style.color = 'yellow';
    };
})
;



