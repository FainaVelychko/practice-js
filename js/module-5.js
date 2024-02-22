// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (number, index) {
//     totalPrice += number;
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

const changeEven = (numbers, value) => {
  let newArrey = [];
  numbers.forEach(element => {
    if (element % 2 === 0) {
      newArrey.push(element + value);
    } else {
      newArrey.push(element);
    }
  });
  return newArrey;
};

console.log(changeEven([1, 2, 3, 4, 5], 10));
