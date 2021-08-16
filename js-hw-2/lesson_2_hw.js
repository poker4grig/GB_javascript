/*1. Дан код:
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - инкремент с префиксом, сначала происходит инкрементирование, потом возвращается результат. 
d = b++; alert(d);           // 1 - инкремент с постфиксом, сначала происходит возврат значения, потом инкрементирование. 
c = (2+ ++a); alert(c);      // 5 - к 2 прибавили инкрементированное с префиксом 'a', которое уже было равно 2, а после инкрементирования стало равно 3. 2 + 3 == 5.
d = (2+ b++); alert(d);      // 4 - к 2 прибавили инкрементированное с постфиксом 'b', которое вернуло 2, а только после этого было инкрементировано. т.е. 2 + 2 == 4, после этого 'b' стало равно 3.
alert(a);                    // 3 - 'a' изначально было равно 1, потом было 2 раза инкрементрировано (1 раз с префиксом, 1 раз с постфиксом).
alert(b);                    // 3 - 'b' изначально было равно 1, потом было 2 раза инкрементрировано (1 раз с постфиксом, 1 раз с префиксом).
Почему код даёт именно такие результаты?*/

/*2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);
x == 5, т.к. выражение: a *= 2 то же самое, что и выражение: a = a * 2.*/

/*3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
•	если a и b положительные, вывести их разность;
•	если а и b отрицательные, вывести их произведение;
•	если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.*/
let a = Math.floor((Math.random() - 0.5) * 100);
let b = Math.floor((Math.random() - 0.5) * 100);
console.log(a);
console.log(b);
if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a <= 0 && b <= 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}

/*4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.*/
let variable = Math.floor(Math.random() * 16);
console.log(variable);
switch (variable) {
    case 1:
        console.log(1);
    case 2:
        console.log(2);
    case 3:
        console.log(3);
    case 4:
        console.log(4);
    case 5:
        console.log(5);
    case 6:
        console.log(6);
    case 7:
        console.log(7);
    case 8:
        console.log(8);
    case 9:
        console.log(9);
    case 10:
        console.log(10);
    case 11:
        console.log(11);
    case 12:
        console.log(12);
    case 13:
        console.log(13);
    case 14:
        console.log(14);
    case 15:
        console.log(15);
}

/*5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.*/
function addition(fstPar, sndPar) { // сложение
    return fstPar + sndPar;
}

function subtraction(fstPar, sndPar) {  // вычитание
    return fstPar - sndPar;
}

function multiplication(fstPar, sndPar) {  // умножение
    return fstPar * sndPar;
}

function division(fstPar, sndPar) {  // деление
    return fstPar / sndPar;
}
console.log(addition(6, 3))

/*6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).*/
let arg1 = parseInt(prompt('Введите первое число '));
let arg2 = parseInt(prompt('Введите второе число '));
let operation = prompt("Введите математическую операцию: сложение или '+', вычитание или '-', умножение или '*', деление или '/'");

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case ('сложение'):
        case ('+'):
            alert(addition(arg1, arg2));
            break;
        case ('вычитание'):
        case ('-'):
            alert(subtraction(arg1, arg2));
            break;
        case ('умножение'):
        case ('*'):
            alert(multiplication(arg1, arg2));
            break;
        case ('деление'):
        case ('/'):
            alert(division(arg1, arg2));
            break;
        default:
            alert('Необходимо ввести только вышеуказанные математические операции');
    }
}

mathOperation(arg1, arg2, operation);

/*7. Сравнить null и 0. Попробуйте объяснить результат*/
alert(null > 0); // false
alert(null < 0); // false
alert(null == 0); // false
alert(null === 0); // false
alert(null >= 0); // true
alert(null <= 0); // true
/* это особенность JavaScript. В данном случае null преобразуется в число, рассматривая его как 0. Поэтому, например, выражение null >= 0 истинно, а null > 0 ложно. С другой стороны, для нестрогого равенства == значений undefined и null действует особое правило: эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому null == 0 ложно (по материалам https://learn.javascript.ru/comparison).*/

/*8. С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.*/
let value = parseInt(prompt('Введите число '));
let powerVar = parseInt(prompt('Введите степень, в которую надо возвести число '));

function power(val, pow) {

    if (pow == 0) {
        return 1;
    } else {
        return val * power(val, pow - 1);
    }

}
alert(power(value, powerVar));
