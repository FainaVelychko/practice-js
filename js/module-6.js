// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }
//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace);

//Знайти унікальні елементи за допомогою reduce
const numbers = [1, 9, 0, 1, 5, 9, 1, 6];
const numbersFun = array =>
  array.reduce(
    (acc, number) => (acc.includes(number) ? acc : [...acc, number]),
    []
  );
console.log(numbersFun(numbers));
