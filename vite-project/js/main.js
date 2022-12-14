import "../styles/style.css";
import { champion } from "./menu";
console.log(champion);
import { DOMSelectors } from "./dom";

const commands = {
  createcards: function () {
    champion.forEach((champ) => {
      DOMSelectors.box.insertAdjacentHTML(
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
  filterMarksman: function () {
    champion
      .filter((champion) => champion.tags.includes(`Marksman`))
      .forEach((champ) => {
        DOMSelectors.box.insertAdjacentHTML(
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
  filterMage: function () {
    champion
      .filter((champion) => champion.tags.includes(`Mage`))
      .forEach((champ) => {
        DOMSelectors.box.insertAdjacentHTML(
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
  filterTank: function () {
    champion
      .filter((champion) => champion.tags.includes(`Tank`))
      .forEach((champ) => {
        DOMSelectors.box.insertAdjacentHTML(
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
  filterAssassin: function () {
    champion
      .filter((champion) => champion.tags.includes(`Assassin`))
      .forEach((champ) => {
        DOMSelectors.box.insertAdjacentHTML(
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
  filterFighter: function () {
    champion
      .filter((champion) => champion.tags.includes(`Fighter`))
      .forEach((champ) => {
        DOMSelectors.box.insertAdjacentHTML(
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
  filterSupport: function () {
    champion
      .filter((champion) => champion.tags.includes(`Support`))
      .forEach((champ) => {
        DOMSelectors.box.insertAdjacentHTML(
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

  remove: function () {
    let card = document.querySelectorAll(".inner");
    card.forEach((card) => {
      card.remove();
    });
  },
};

commands.createcards();

DOMSelectors.button2.addEventListener("click", function () {
  commands.remove();
  commands.filterMarksman();
});

DOMSelectors.button3.addEventListener("click", function () {
  commands.remove();
  commands.filterMage();
});
DOMSelectors.button4.addEventListener("click", function () {
  commands.remove();
  commands.filterTank();
});
DOMSelectors.button5.addEventListener("click", function () {
  commands.remove();
  commands.filterAssassin();
});
DOMSelectors.button6.addEventListener("click", function () {
  commands.remove();
  commands.filterFighter();
});
DOMSelectors.button7.addEventListener("click", function () {
  commands.remove();
  commands.filterSupport();
});
DOMSelectors.button8.addEventListener("click", function () {
  commands.remove();
  commands.createcards();
});
