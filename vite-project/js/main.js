import "../styles/style.css";
import { champion } from "./menu";
console.log(champion);
import { DOMSelectors } from "./dom";

DOMSelectors.button.addEventListener("click", function () {
  if (document.body.classList.contains("lightmode")) {
    document.body.classList.add("darkmode");
    document.body.classList.remove("lightmode");
    document.body.style.color = "white";
  } else {
    document.body.classList.add("lightmode");
    document.body.classList.remove("darkmode");
    document.body.style.color = "black";
  }
});

createcards()

function createcards(){
champion.forEach(champ => { DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `
    <div class="inner">   
    <p>${champ.name} </p>
    <img src="${champ.id}.png" alt="No Image???">
    <p>${champ.title}</p>
    </div>
`
  );
});
};

DOMSelectors.button2.addEventListener("click", function(){
  champion.filter((champion) => champion.tags.includes(`Marksman`))
  .forEach(champ => { DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `
    <div class="inner">  
    <p>${champ.name} </p>
    <img src="${champ.id}.png" alt="No Image???">
    <p>${champ.title}</p>
    </div>
`
  );
  });
  
}) ; 