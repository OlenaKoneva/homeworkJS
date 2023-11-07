//Завдання1
function drawTriangle(high, symbol) {
  let stringToOut = '';
  for (let i = 0; i <= high; i++) {
    stringToOut = stringToOut + symbol;
    console.log(stringToOut);
  }
}

drawTriangle(5, '=')