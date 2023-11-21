let str = "Домашнє завдання з програмування десять";
let re = /[^аА]{6,}/gm;
console.log(str.match(re));

