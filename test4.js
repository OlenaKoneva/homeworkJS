function checkProbabilityTheory(count){
  let pCount = 0;
  let nCount = 0;
  let percentage = 0;
  for ( let a = 0; a < count; a++ ){
    let rndNumber = Math.round(Math.random() * 1000, 0) + 100;
    if (rndNumber % 2) {
      pCount += 1;
    } else {
      nCount += 1;
    }
  }
  console.log('Кількість згенерованих чисел: ' + count);
  console.log('Парних чисел: ' + pCount);
  console.log('Не парних чисел: ' + nCount);
  console.log('Відсоток парних до не парних:  ' + (100 / (pCount + nCount)) * pCount);
}

checkProbabilityTheory(10000);