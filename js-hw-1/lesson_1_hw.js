/*1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию*/
function fahrenheit(celsiusTemp) {
    fahrenheitTemp = (9 / 5) * celsiusTemp + 32;
    return fahrenheitTemp;
}
let celsium = parseInt(prompt('Сколько градусов в Цельсиях?'));

alert(`По Фаренгейту это будет ${fahrenheit(celsium)} градусов`);

/*2. Работа с переменными. Объявить две переменные: admin и name. Записать в name строку ""Василий""; Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).*/
let admin;
let name;
name = "Василий";
admin = name;
console.log(admin);

/*3. *Чему будет равно JS-выражение 1000 + "108"*/
console.log(1000 + "108"); /* -> 1000108 (тип String). По правилам JS, если хоть один из операндов является строкой, то 
при выполнении оператора "+" последует конкатенация строк, а не сложение.*/

/*4. *Самостоятельно разобраться с атрибутами тега script (async и defer)*/
/*Вывод: Разница между async и defer: атрибут defer сохраняет относительную последовательность скриптов, а async – нет. Кроме того, defer всегда ждёт, пока весь HTML-документ будет готов, а async – нет. (по материалам https://learn.javascript.ru/external-script)*/
