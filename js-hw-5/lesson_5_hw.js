"use strict";
/*2. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
2.1. Пустая корзина должна выводить строку «Корзина пуста»;
2.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/
const myDiv = document.querySelector('#main');

let basket = []
let emptyBasket = '<p>Ваша корзина пуста</p>'

function Product(name, count, price) {
   this.name = name;
   this.count = count;
   this.price = price
}

basket.push(
   new Product('monitor', 5, 5000)
);
basket.push(
   new Product('gamepad', 50, 1000)
);
basket.push(
   new Product('video card', 10, 10000)
);

if (basket == 0) {
   myDiv.insertAdjacentHTML('beforeend', `<div>${emptyBasket}</div>`);
} else {
   for (const item of basket) {
      main.insertAdjacentHTML('beforeend',
         `<div class="prod_item">
        <span>Product - ${item.name}.</span> 
        <span>Count - ${item.count}.</span>
        <span>Price - ${item.price} rub.</span>
        </div>`);
   }
}

function totalPrice(basket) {
   return basket.reduce(function (acc, basket) {
      return acc + basket.count
   }, 0)
};

function totalCount(basket) {
   return basket.reduce(function (acc, basket) {
      return acc + (basket.price * basket.count)
   }, 0)
};

if (basket != 0) {
   const all = myDiv.insertAdjacentHTML('beforeend',
      `<hr><div>In the basket: ${totalPrice(basket)} of goods in the amount of 
    ${totalCount(basket)} rubles</div>`);
}