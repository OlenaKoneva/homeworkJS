let services = {
  'стрижка': '60 грн',
  'гоління': '80 грн',
  'Миття голови': '100 грн',
};

function price(obj){
  let result = 0;
  for (let a of Object.values(obj)) {
    result += Number(a.replace(' грн', ''));
  }
  console.log('Усього: ' + result + ' грн');
}

function minPrice(obj){
  let minPriceResult = undefined;
  for (let a of Object.values(obj)) {
    let price = Number(a.replace(' грн', ''))
    if (minPriceResult === undefined || minPriceResult > price) {
      minPriceResult = price;
    }
  }
  console.log('Мінімальна ціна: ' + minPriceResult + ' грн');
}
function maxPrice(obj){
  let maxPriceResult = undefined;
  for (let a of Object.values(obj)) {
    let price = Number(a.replace(' грн', ''))
    if (maxPriceResult === undefined || maxPriceResult < price) {
      maxPriceResult = price;
    }
  }
  console.log('Максимальна ціна: ' + maxPriceResult + ' грн');
}
services['Розбити скло'] = '200 грн';

price(services);
minPrice(services);
maxPrice(services);