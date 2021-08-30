"use strict";
/*1. Доработать модуль корзины.
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида
*/
var cartContent = [];
function getButtons() {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = act;
    }
}

function getCart() {
    var cart = document.getElementById("cart");
    var list = document.createElement("div");
    var nameOfChosen = document.createElement("p");
    var ammount = document.createElement("p");
    var count = document.createElement("p");
    var sum = document.createElement("p");
    var totalItem = document.createElement("p");
    var totalCart = 0;
    var outputResult = document.createElement("p");
    outputResult.classList.add('text');


    cart.innerHTML = "";

    for (var i = 0; i < cartContent.length; i += 4) {
        if (cartContent[i + 2] == 0) {
            cartContent.splice(i, 4)
            i -= 4;
            continue;
        }
        else {
            list.innerHTML = "";
            nameOfChosen.innerHTML = cartContent[i + 1];
            ammount.innerHTML = "Количество: ";
            count.innerHTML = cartContent[i + 2];
            sum.innerHTML = "Цена за шт: " + cartContent[i + 3] + " руб.";
            totalItem.innerHTML = "Общая стоимость: " + (cartContent[i + 2] * cartContent[i + 3]) + " руб.";
            totalCart += (cartContent[i + 2] * cartContent[i + 3]);

            list.appendChild(nameOfChosen);
            list.appendChild(ammount);
            list.appendChild(count);
            list.appendChild(sum);
            list.appendChild(totalItem);

            cart.innerHTML += list.outerHTML;
        }
    }
    if (cart.innerHTML == "") {
        outputResult.innerHTML = "Корзина еще пуста! <br> Выберите товар из каталога"
    }
    else {
        outputResult.innerHTML = "Общая стоимость вашего заказа: " + totalCart + " рублей."
    }
    cart.appendChild(outputResult);
    getButtons();
}

function act(event) {
    if (cartContent.indexOf(event.target.parentElement.children[1].innerHTML) == -1) {
        cartContent.push(event.target.parentElement.children[0]);
        cartContent.push(event.target.parentElement.children[1].innerHTML);
        cartContent.push(1);
        cartContent.push(+(event.target.parentElement.children[3].innerHTML.substr(0, (event.target.parentElement.children[3].innerHTML.length - 4))));
    }
    else {
        cartContent[cartContent.indexOf(event.target.parentElement.children[1].innerHTML) + 1] += 1;
    }
    getCart();
}

window.onload = getCart;
