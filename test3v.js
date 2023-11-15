 function pad(rawToWhichWeShouldAddSymbols, symbolWichWeWillAddToRow, amountSymbols, isAddBegining){
 let result = rawToWhichWeShouldAddSymbols;
   for ( let a = rawToWhichWeShouldAddSymbols.length; a < amountSymbols; a++) {
     if(isAddBegining){
       result = symbolWichWeWillAddToRow + result
     } else{
       result = result + symbolWichWeWillAddToRow
     }
   };
   console.log(result);
 }
 
 pad('Hello', 'f', 8,  false)
 
