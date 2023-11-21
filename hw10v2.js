let arr = [
  {
    userName:"Test",
    lastName:"Test",
    email:"test.test@gmail.com"
  },
  {
    userName:"Dmitro",
    lastName:"Porohov",
    email:"dmitro.porohov@yahoo.com"
  },
  {
    userName:"Andrii",
    lastName:"",
    email:"andrii@mail.ru" // Нам такі не підходять
  },
];
let rg = /[a-zA-Z\.0-9]{3,}@gmail\.com|[a-zA-Z\.0-9]{3,}@yahoo\.com/gm;
let result = arr.filter((item) => item.email.match(rg));
console.log(result);
