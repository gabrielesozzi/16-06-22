function calc(numOne, numTwo, operator) {
  switch (operator) {
    case "+":
      return numOne + numTwo;
      break;
    case "-":
      return numOne - numTwo;
      break;
    case "*":
      return numOne * numTwo;
      break;
    case "/":
      return numOne / numTwo;
      break;
    default:
      console.error("Quale operazione vuoi che svolgo?");
  }
}

const firstNum = Number(prompt("Inserisci il primo numero"));
const secondNum = Number(prompt("Inserisci il primo numero"));

console.log(calc(firstNum, secondNum, "+"));
console.log(calc(firstNum, secondNum, "-"));
console.log(calc(firstNum, secondNum, "*"));
console.log(calc(firstNum, secondNum, "/"));

console.log(calc(4, 4, "*"));
