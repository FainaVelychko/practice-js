// Objects

const stones = [
  { name: 'Смарагд', price: 1300, quantity: 4 },
  { name: 'Діамант', price: 2700, quantity: 3 },
  { name: 'Сапфір', price: 400, quantity: 7 },
  { name: 'Рубін', price: 200, quantity: 2 },
];

function calcTotalPrice(arr, stoneName) {
  let totalPrice;
  for (const item of arr) {
    if (item.name === stoneName) {
      totalPrice = item.price * item.quantity;
    }
  }
  return totalPrice;
}
console.log(calcTotalPrice(stones, 'Смарагд'));
console.log(calcTotalPrice(stones, 'Діамант'));
console.log(calcTotalPrice(stones, 'Сапфір'));
console.log(calcTotalPrice(stones, 'Рубін'));
