"use strict";

// all operasions buttons on app
const buttons = Array.from(
  document.querySelectorAll(".calc__operation-block button")
);

// add event onclick for every button
buttons.forEach((button) => {
  button.onclick = (event) =>
    onButtonClickOperation(event.srcElement.innerHTML);
});

// all inputs on app
const inputs = Array.from(document.querySelectorAll("input"));

// all operations
let operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

function onButtonClickOperation(operation = "") {
  let number1 = +inputs[0].value;
  let number2 = +inputs[1].value;

  if (operation in operations) {
    renderResaltOnApp(operations[operation](number1, number2));
  } else throw new Error("Operator is not found");
}

// render result on .calc (create new block and render)
function renderResaltOnApp(result) {
  if (document.querySelector(".calc__result-block")) {
    document.querySelector(
      ".calc__result-block"
    ).innerHTML = `<p>Result:</p><h1>${result}</h1>`;
  } else {
    let resultBlock = document.createElement("div");

    resultBlock.classList.add("calc__result-block");
    resultBlock.style.textAlign = "center";
    resultBlock.innerHTML = `<p>Result:</p><h1>${result}</h1>`;

    document.querySelector(".calc").append(resultBlock);
  }
}
