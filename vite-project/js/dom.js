const DOMSelectors = {
    button: document.getElementById("btn1"),
    button2: document.getElementById("btn2"),
    button3: document.getElementById("btn3"),
    button4: document.getElementById("btn4"),
    button5: document.getElementById("btn5"),
    button6: document.getElementById("btn6"),
    button7: document.getElementById("btn7"),
    button8: document.getElementById("btn8"),
    box: document.getElementById("container-box"),
  };
  export {DOMSelectors};

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