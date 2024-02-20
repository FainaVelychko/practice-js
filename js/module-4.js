// Objects

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Рубін', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(arr, stoneName) {
//   let totalPrice;
//   for (const item of arr) {
//     if (item.name === stoneName) {
//       totalPrice = item.price * item.quantity;
//     }
//   }
//   return totalPrice;
// }
// console.log(calcTotalPrice(stones, 'Смарагд'));
// console.log(calcTotalPrice(stones, 'Діамант'));
// console.log(calcTotalPrice(stones, 'Сапфір'));
// console.log(calcTotalPrice(stones, 'Рубін'));

// ------------------------------------ 4

// /*
//  * Типів транзакцій всього два.
//  * Можна покласти чи зняти гроші з рахунку.
//  */
const Transactions = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
//    * Кожна транзакція це об'єкт із властивостями: id, type та amount
//    */

const account = {
  // Поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  // /*
  //  * Метод створює та повертає об'єкт транзакції.
  //  * Приймає суму та тип транзакції.
  //  */
  createTransaction(amount, type) {
    const obj = { id: amount, amount, type };
    this.transactions.push(obj);
  },

  //   /*
  //    * Метод, що відповідає за додавання суми до балансу.
  //    * Приймає суму транзакції.
  //    * Викликає createTransaction для створення об'єкта транзакції
  //    * після чого додає його до історії транзакцій
  //    */
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transactions.DEPOSIT);
  },

  //   /*
  //    * Метод, що відповідає за зняття суми з балансу.
  //    * Приймає суму транзакції.
  //    * Викликає createTransaction для створення об'єкта транзакції
  //    * після чого додає його до історії транзакцій.
  //    *
  //    * Якщо amount більше ніж поточний баланс, виводь повідомлення
  //    * про те, що зняття такої суми не можливе, недостатньо коштів.
  //    */
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('not enough money');
    } else {
      this.balance -= amount;
      this.createTransaction(amount, Transactions.WITHDRAW);
    }
  },

  //   /*
  //    * Метод повертає поточний баланс
  //    */
  getBalance() {
    return this.balance;
  },

  //   /*
  //    * Метод шукає та повертає об'єкт транзакції по id
  //    */
  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (item.id === id) {
        return item;
      }
    }
  },

  //   /*
  //    * Метод повертає кількість коштів
  //    * певного типу транзакції з усієї історії транзакцій
  //    */
  getTransactionTotal(type) {
    let transactionTotal = [];
    for (const item of this.transactions) {
      if (item.type === type) {
        transactionTotal.push(item);
      }
    }
    return transactionTotal;
  },
};

account.deposit(200);
account.deposit(500);
account.withdraw(100);

console.log(account);
console.log(account.getBalance());
console.log(account.getTransactionDetails(500));
console.log(account.getTransactionTotal(Transactions.DEPOSIT));
