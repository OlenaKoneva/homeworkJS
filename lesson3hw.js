/**
//Завдання1
function drawTriangle(high, symbol) {
  let stringToOut = '';
  for (let i = 0; i <= high; i++) {
    stringToOut = stringToOut + symbol;
    console.log(stringToOut);
  }
}

drawTriangle(5, '=')

function drawTriangleV2(high, symbol) {
  let stringToOut = '';
  let i = 0;
  while ( i < high ) {
    stringToOut += symbol;
    console.log(stringToOut);
    i++;
  }
}

drawTriangleV2(6, '0')

//Завдання 2
let result = 0;
for (let i = 1; i <= 100; i++) {
  result += i;
  if (result % 3) {
    console.log(result);
  }
}
**/
//Завдання3
function pow(x,y){
  let result = x;
  for (let i = 1; i <= y; i++ ){
    result *=x;
  }
  console.log(result)
}
pow(5,5)