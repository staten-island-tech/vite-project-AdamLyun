import "../styles/style.css";
import { champion } from "./menu";
console.log(champion);
import { DOMSelectors } from "./dom";

DOMSelectors.button.addEventListener("click", function () {
  if (document.body.classList.contains("lightmode")) {
    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode");
    document.body.style.color = "black";
  } else {
    document.body.classList.add("lightmode");
    document.body.classList.remove("darkmode");
    document.body.style.color = "white";
  }
});

champion.forEach(champ => { DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `<div class="output">
    <h3> ${champ.id}</h3>
    <img src=".png" alt="No Image???">
     <h3></h3
    </div>`
  );
    
});
