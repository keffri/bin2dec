let zeroButton = document.querySelector(".zero");
let oneButton = document.querySelector(".one");

let binaryDisplay = document.querySelector(".binary");
let binaryText = binaryDisplay.textContent;
let decimalDisplay = document.querySelector(".decimal");
let decimalText = decimalDisplay.textContent;
let decimalNumber = 0;

let clearButton = document.querySelector(".clear");
let convertButton = document.querySelector(".convert");

/*** Functions ***/

reset = () => {
  binaryText = "";
};

/*** Event Listeners ***/

zeroButton.addEventListener("click", () => {
  binaryText += zeroButton.textContent;
  binaryDisplay.textContent = binaryText;
  decimalDisplay.textContent = "";
  decimalText = "";
  decimalNumber = 0;
});

oneButton.addEventListener("click", () => {
  binaryText += oneButton.textContent;
  binaryDisplay.textContent = binaryText;
  decimalDisplay.textContent = "";
  decimalText = "";
  decimalNumber = 0;
});

convertButton.addEventListener("click", () => {
  for (let i = binaryText.length - 1; i >= 0; i--) {
    decimalNumber +=
      parseInt(binaryText[i]) * Math.pow(2, binaryText.length - 1 - i);
  }
  decimalDisplay.textContent = decimalNumber;
  reset();
  return decimalNumber;
});

clearButton.addEventListener("click", () => {
  binaryDisplay.textContent = "";
  binaryText = "";
  decimalDisplay.textContent = "";
  decimalText = "";
});
