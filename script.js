
// Selecting the HTML elements
const display = document.getElementById("inner-display");
const buttons = document.getElementById("buttons");
const buttonList = buttons.getElementsByTagName("button");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

// Creating the event listener for each button
for (let i = 0; i < buttonList.length; i++) {
buttonList[i].addEventListener("click", function () {
const buttonText = this.getAttribute("data-value");

if (buttonText === "AC") {
// Clearing the display and resetting the variables
display.textContent = "";
firstNumber = "";
secondNumber = "";
operator = "";
result = "";
} else if (buttonText === "+/-") {
// Changing the sign of the current number on display
display.textContent = -parseFloat(display.textContent);
} else if (buttonText === "%") {
// Dividing the current number on display by 100
display.textContent = parseFloat(display.textContent) / 100;
} else if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
// Setting the operator and saving the first number
operator = buttonText;
firstNumber = parseFloat(display.textContent);
display.textContent = "";
} else if (buttonText === "=") {
// Calculating the result and displaying it
secondNumber = parseFloat(display.textContent);
if (operator === "+") {
result = firstNumber + secondNumber;
} else if (operator === "-") {
result = firstNumber - secondNumber;
} else if (operator === "*") {
result = firstNumber * secondNumber;
} else if (operator === "/") {
result = firstNumber / secondNumber;
}
display.textContent = result;
firstNumber = result;
secondNumber = "";
operator = "";
} else {
// Appending the button value to the display
display.textContent += buttonText;
}
});
}
