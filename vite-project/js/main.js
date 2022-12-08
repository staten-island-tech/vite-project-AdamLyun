import "../styles/style.css";
import { champion } from "./menu";
console.log(champion);
import { DOMSelectors } from "./dom";

const commands = {
  createcards: function(){
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
    },
  filterMarksman: function(){
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
    
  },
  filterMage: function(){
    champion.filter((champion) => champion.tags.includes(`Mage`))
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
    
  },
  filterTank: function(){
    champion.filter((champion) => champion.tags.includes(`Tank`))
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
    
  },

}



DOMSelectors.button2.addEventListener("click", commands.filterMarksman) 
DOMSelectors.button3.addEventListener("click", commands.filterMage)
DOMSelectors.button4.addEventListener("click", commands.filterTank)
