const prompt = require('prompt');
prompt.start();

prompt.get(['age'], function (err, result) {
  const convertedAge = +result.age;
console.log(convertedAge);
  {
    switch (true) {
      case (convertedAge === 1 || convertedAge === 21 || convertedAge === 31 || convertedAge === 41 || convertedAge === 51 || convertedAge === 61 ):
        console.log(convertedAge + ' рік');
        break;
      case (convertedAge <= 4 && convertedAge >= 2 || convertedAge <= 24 && convertedAge >= 22 || convertedAge <= 34 && convertedAge >= 32 || convertedAge <= 44 && convertedAge >= 42 || convertedAge <= 54 && convertedAge >= 52 || convertedAge <= 64 && convertedAge >= 62):
        console.log(convertedAge + ' роки')
        break;
      case (convertedAge >= 5 && convertedAge <= 20 || convertedAge >= 25 && convertedAge <= 30 || convertedAge >= 35 && convertedAge <= 40 || convertedAge >= 45 && convertedAge <= 50 || convertedAge >= 55 && convertedAge <= 60 || convertedAge >= 65 && convertedAge <= 70):
        console.log(convertedAge + ' років')
        break;
      default:
        console.log('введіть коректне значення')

    }
  }
})
