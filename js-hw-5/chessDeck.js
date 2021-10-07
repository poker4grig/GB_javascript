"use strict";
/*1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H. (использовать createElement / appendChild)*/

const myBody = document.querySelector('body');
myBody.style.width = '3000px';
myBody.style.paddingRight = '1000px';

const myDiv = document.createElement('div');
const myTable = document.createElement('table');
const myCaption = document.createElement('caption');
const trNum1 = document.createElement('tr');
const trNum2 = document.createElement('tr');
const trNum3 = document.createElement('tr');
const trNum4 = document.createElement('tr');
const trNum5 = document.createElement('tr');
const trNum6 = document.createElement('tr');
const trNum7 = document.createElement('tr');
const trNum8 = document.createElement('tr');
const trNum9 = document.createElement('tr');

const tdWhiteA8 = document.createElement('td'); tdWhiteA8.style.backgroundColor = 'white'; tdWhiteA8.style.height = '50px'; tdWhiteA8.style.width = '50px'; tdWhiteA8.style.border = '1px solid black';
const tdGreyB8 = document.createElement('td'); tdGreyB8.style.backgroundColor = 'grey'; tdGreyB8.style.height = '50px'; tdGreyB8.style.width = '50px'; tdGreyB8.style.border = '1px solid black';
const tdWhiteC8 = document.createElement('td'); tdWhiteC8.style.backgroundColor = 'white'; tdWhiteC8.style.height = '50px'; tdWhiteC8.style.width = '50px'; tdWhiteC8.style.border = '1px solid black';
const tdGreyD8 = document.createElement('td'); tdGreyD8.style.backgroundColor = 'grey'; tdGreyD8.style.height = '50px'; tdGreyD8.style.width = '50px'; tdGreyD8.style.border = '1px solid black';
const tdWhiteE8 = document.createElement('td'); tdWhiteE8.style.backgroundColor = 'white'; tdWhiteE8.style.height = '50px'; tdWhiteE8.style.width = '50px'; tdWhiteE8.style.border = '1px solid black';
const tdGreyF8 = document.createElement('td'); tdGreyF8.style.backgroundColor = 'grey'; tdGreyF8.style.height = '50px'; tdGreyF8.style.width = '50px'; tdGreyF8.style.border = '1px solid black';
const tdWhiteG8 = document.createElement('td'); tdWhiteG8.style.backgroundColor = 'white'; tdWhiteG8.style.height = '50px'; tdWhiteG8.style.width = '50px'; tdWhiteG8.style.border = '1px solid black';
const tdGreyH8 = document.createElement('td'); tdGreyH8.style.backgroundColor = 'grey'; tdGreyH8.style.height = '50px'; tdGreyH8.style.width = '50px'; tdGreyH8.style.border = '1px solid black';

const tdGreyA7 = document.createElement('td'); tdGreyA7.style.backgroundColor = 'grey'; tdGreyA7.style.height = '50px'; tdGreyA7.style.width = '50px'; tdGreyA7.style.border = '1px solid black';
const tdWhiteB7 = document.createElement('td'); tdWhiteB7.style.backgroundColor = 'white'; tdWhiteB7.style.height = '50px'; tdWhiteB7.style.width = '50px'; tdWhiteB7.style.border = '1px solid black';
const tdGreyC7 = document.createElement('td'); tdGreyC7.style.backgroundColor = 'grey'; tdGreyC7.style.height = '50px'; tdGreyC7.style.width = '50px'; tdGreyC7.style.border = '1px solid black';
const tdWhiteD7 = document.createElement('td'); tdWhiteD7.style.backgroundColor = 'white'; tdWhiteD7.style.height = '50px'; tdWhiteD7.style.width = '50px'; tdWhiteD7.style.border = '1px solid black';
const tdGreyE7 = document.createElement('td'); tdGreyE7.style.backgroundColor = 'grey'; tdGreyE7.style.height = '50px'; tdGreyE7.style.width = '50px'; tdGreyE7.style.border = '1px solid black';
const tdWhiteF7 = document.createElement('td'); tdWhiteF7.style.backgroundColor = 'white'; tdWhiteF7.style.height = '50px'; tdWhiteF7.style.width = '50px'; tdWhiteF7.style.border = '1px solid black';
const tdGreyG7 = document.createElement('td'); tdGreyG7.style.backgroundColor = 'grey'; tdGreyG7.style.height = '50px'; tdGreyG7.style.width = '50px'; tdGreyG7.style.border = '1px solid black';
const tdWhiteH7 = document.createElement('td'); tdWhiteH7.style.backgroundColor = 'white'; tdWhiteH7.style.height = '50px'; tdWhiteH7.style.width = '50px'; tdWhiteH7.style.border = '1px solid black';

const tdWhiteA6 = document.createElement('td'); tdWhiteA6.style.backgroundColor = 'white'; tdWhiteA6.style.height = '50px'; tdWhiteA6.style.width = '50px'; tdWhiteA6.style.border = '1px solid black';
const tdGreyB6 = document.createElement('td'); tdGreyB6.style.backgroundColor = 'grey'; tdGreyB6.style.height = '50px'; tdGreyB6.style.width = '50px'; tdGreyB6.style.border = '1px solid black';
const tdWhiteC6 = document.createElement('td'); tdWhiteC6.style.backgroundColor = 'white'; tdWhiteC6.style.height = '50px'; tdWhiteC6.style.width = '50px'; tdWhiteC6.style.border = '1px solid black';
const tdGreyD6 = document.createElement('td'); tdGreyD6.style.backgroundColor = 'grey'; tdGreyD6.style.height = '50px'; tdGreyD6.style.width = '50px'; tdGreyD6.style.border = '1px solid black';
const tdWhiteE6 = document.createElement('td'); tdWhiteE6.style.backgroundColor = 'white'; tdWhiteE6.style.height = '50px'; tdWhiteE6.style.width = '50px'; tdWhiteE6.style.border = '1px solid black';
const tdGreyF6 = document.createElement('td'); tdGreyF6.style.backgroundColor = 'grey'; tdGreyF6.style.height = '50px'; tdGreyF6.style.width = '50px'; tdGreyF6.style.border = '1px solid black';
const tdWhiteG6 = document.createElement('td'); tdWhiteG6.style.backgroundColor = 'white'; tdWhiteG6.style.height = '50px'; tdWhiteG6.style.width = '50px'; tdWhiteG6.style.border = '1px solid black';
const tdGreyH6 = document.createElement('td'); tdGreyH6.style.backgroundColor = 'grey'; tdGreyH6.style.height = '50px'; tdGreyH6.style.width = '50px'; tdGreyH6.style.border = '1px solid black';

const tdGreyA5 = document.createElement('td'); tdGreyA5.style.backgroundColor = 'grey'; tdGreyA5.style.height = '50px'; tdGreyA5.style.width = '50px'; tdGreyA5.style.border = '1px solid black';
const tdWhiteB5 = document.createElement('td'); tdWhiteB5.style.backgroundColor = 'white'; tdWhiteB5.style.height = '50px'; tdWhiteB5.style.width = '50px'; tdWhiteB5.style.border = '1px solid black';
const tdGreyC5 = document.createElement('td'); tdGreyC5.style.backgroundColor = 'grey'; tdGreyC5.style.height = '50px'; tdGreyC5.style.width = '50px'; tdGreyC5.style.border = '1px solid black';
const tdWhiteD5 = document.createElement('td'); tdWhiteD5.style.backgroundColor = 'white'; tdWhiteD5.style.height = '50px'; tdWhiteD5.style.width = '50px'; tdWhiteD5.style.border = '1px solid black';
const tdGreyE5 = document.createElement('td'); tdGreyE5.style.backgroundColor = 'grey'; tdGreyE5.style.height = '50px'; tdGreyE5.style.width = '50px'; tdGreyE5.style.border = '1px solid black';
const tdWhiteF5 = document.createElement('td'); tdWhiteF5.style.backgroundColor = 'white'; tdWhiteF5.style.height = '50px'; tdWhiteF5.style.width = '50px'; tdWhiteF5.style.border = '1px solid black';
const tdGreyG5 = document.createElement('td'); tdGreyG5.style.backgroundColor = 'grey'; tdGreyG5.style.height = '50px'; tdGreyG5.style.width = '50px'; tdGreyG5.style.border = '1px solid black';
const tdWhiteH5 = document.createElement('td'); tdWhiteH5.style.backgroundColor = 'white'; tdWhiteH5.style.height = '50px'; tdWhiteH5.style.width = '50px'; tdWhiteH5.style.border = '1px solid black';

const tdWhiteA4 = document.createElement('td'); tdWhiteA4.style.backgroundColor = 'white'; tdWhiteA4.style.height = '50px'; tdWhiteA4.style.width = '50px'; tdWhiteA4.style.border = '1px solid black';
const tdGreyB4 = document.createElement('td'); tdGreyB4.style.backgroundColor = 'grey'; tdGreyB4.style.height = '50px'; tdGreyB4.style.width = '50px'; tdGreyB4.style.border = '1px solid black';
const tdWhiteC4 = document.createElement('td'); tdWhiteC4.style.backgroundColor = 'white'; tdWhiteC4.style.height = '50px'; tdWhiteC4.style.width = '50px'; tdWhiteC4.style.border = '1px solid black';
const tdGreyD4 = document.createElement('td'); tdGreyD4.style.backgroundColor = 'grey'; tdGreyD4.style.height = '50px'; tdGreyD4.style.width = '50px'; tdGreyD4.style.border = '1px solid black';
const tdWhiteE4 = document.createElement('td'); tdWhiteE4.style.backgroundColor = 'white'; tdWhiteE4.style.height = '50px'; tdWhiteE4.style.width = '50px'; tdWhiteE4.style.border = '1px solid black';
const tdGreyF4 = document.createElement('td'); tdGreyF4.style.backgroundColor = 'grey'; tdGreyF4.style.height = '50px'; tdGreyF4.style.width = '50px'; tdGreyF4.style.border = '1px solid black';
const tdWhiteG4 = document.createElement('td'); tdWhiteG4.style.backgroundColor = 'white'; tdWhiteG4.style.height = '50px'; tdWhiteG4.style.width = '50px'; tdWhiteG4.style.border = '1px solid black';
const tdGreyH4 = document.createElement('td'); tdGreyH4.style.backgroundColor = 'grey'; tdGreyH4.style.height = '50px'; tdGreyH4.style.width = '50px'; tdGreyH4.style.border = '1px solid black';

const tdGreyA3 = document.createElement('td'); tdGreyA3.style.backgroundColor = 'grey'; tdGreyA3.style.height = '50px'; tdGreyA3.style.width = '50px'; tdGreyA3.style.border = '1px solid black';
const tdWhiteB3 = document.createElement('td'); tdWhiteB3.style.backgroundColor = 'white'; tdWhiteB3.style.height = '50px'; tdWhiteB3.style.width = '50px'; tdWhiteB3.style.border = '1px solid black';
const tdGreyC3 = document.createElement('td'); tdGreyC3.style.backgroundColor = 'grey'; tdGreyC3.style.height = '50px'; tdGreyC3.style.width = '50px'; tdGreyC3.style.border = '1px solid black';
const tdWhiteD3 = document.createElement('td'); tdWhiteD3.style.backgroundColor = 'white'; tdWhiteD3.style.height = '50px'; tdWhiteD3.style.width = '50px'; tdWhiteD3.style.border = '1px solid black';
const tdGreyE3 = document.createElement('td'); tdGreyE3.style.backgroundColor = 'grey'; tdGreyE3.style.height = '50px'; tdGreyE3.style.width = '50px'; tdGreyE3.style.border = '1px solid black';
const tdWhiteF3 = document.createElement('td'); tdWhiteF3.style.backgroundColor = 'white'; tdWhiteF3.style.height = '50px'; tdWhiteF3.style.width = '50px'; tdWhiteF3.style.border = '1px solid black';
const tdGreyG3 = document.createElement('td'); tdGreyG3.style.backgroundColor = 'grey'; tdGreyG3.style.height = '50px'; tdGreyG3.style.width = '50px'; tdGreyG3.style.border = '1px solid black';
const tdWhiteH3 = document.createElement('td'); tdWhiteH3.style.backgroundColor = 'white'; tdWhiteH3.style.height = '50px'; tdWhiteH3.style.width = '50px'; tdWhiteH3.style.border = '1px solid black';

const tdWhiteA2 = document.createElement('td'); tdWhiteA2.style.backgroundColor = 'white'; tdWhiteA2.style.height = '50px'; tdWhiteA2.style.width = '50px'; tdWhiteA2.style.border = '1px solid black';
const tdGreyB2 = document.createElement('td'); tdGreyB2.style.backgroundColor = 'grey'; tdGreyB2.style.height = '50px'; tdGreyB2.style.width = '50px'; tdGreyB2.style.border = '1px solid black';
const tdWhiteC2 = document.createElement('td'); tdWhiteC2.style.backgroundColor = 'white'; tdWhiteC2.style.height = '50px'; tdWhiteC2.style.width = '50px'; tdWhiteC2.style.border = '1px solid black';
const tdGreyD2 = document.createElement('td'); tdGreyD2.style.backgroundColor = 'grey'; tdGreyD2.style.height = '50px'; tdGreyD2.style.width = '50px'; tdGreyD2.style.border = '1px solid black';
const tdWhiteE2 = document.createElement('td'); tdWhiteE2.style.backgroundColor = 'white'; tdWhiteE2.style.height = '50px'; tdWhiteE2.style.width = '50px'; tdWhiteE2.style.border = '1px solid black';
const tdGreyF2 = document.createElement('td'); tdGreyF2.style.backgroundColor = 'grey'; tdGreyF2.style.height = '50px'; tdGreyF2.style.width = '50px'; tdGreyF2.style.border = '1px solid black';
const tdWhiteG2 = document.createElement('td'); tdWhiteG2.style.backgroundColor = 'white'; tdWhiteG2.style.height = '50px'; tdWhiteG2.style.width = '50px'; tdWhiteG2.style.border = '1px solid black';
const tdGreyH2 = document.createElement('td'); tdGreyH2.style.backgroundColor = 'grey'; tdGreyH2.style.height = '50px'; tdGreyH2.style.width = '50px'; tdGreyH2.style.border = '1px solid black';

const tdGreyA1 = document.createElement('td'); tdGreyA1.style.backgroundColor = 'grey'; tdGreyA1.style.height = '50px'; tdGreyA1.style.width = '50px'; tdGreyA1.style.border = '1px solid black';
const tdWhiteB1 = document.createElement('td'); tdWhiteB1.style.backgroundColor = 'white'; tdWhiteB1.style.height = '50px'; tdWhiteB1.style.width = '50px'; tdWhiteB1.style.border = '1px solid black';
const tdGreyC1 = document.createElement('td'); tdGreyC1.style.backgroundColor = 'grey'; tdGreyC1.style.height = '50px'; tdGreyC1.style.width = '50px'; tdGreyC1.style.border = '1px solid black';
const tdWhiteD1 = document.createElement('td'); tdWhiteD1.style.backgroundColor = 'white'; tdWhiteD1.style.height = '50px'; tdWhiteD1.style.width = '50px'; tdWhiteD1.style.border = '1px solid black';
const tdGreyE1 = document.createElement('td'); tdGreyE1.style.backgroundColor = 'grey'; tdGreyE1.style.height = '50px'; tdGreyE1.style.width = '50px'; tdGreyE1.style.border = '1px solid black';
const tdWhiteF1 = document.createElement('td'); tdWhiteF1.style.backgroundColor = 'white'; tdWhiteF1.style.height = '50px'; tdWhiteF1.style.width = '50px'; tdWhiteF1.style.border = '1px solid black';
const tdGreyG1 = document.createElement('td'); tdGreyG1.style.backgroundColor = 'grey'; tdGreyG1.style.height = '50px'; tdGreyG1.style.width = '50px'; tdGreyG1.style.border = '1px solid black';
const tdWhiteH1 = document.createElement('td'); tdWhiteH1.style.backgroundColor = 'white'; tdWhiteH1.style.height = '50px'; tdWhiteH1.style.width = '50px'; tdWhiteH1.style.border = '1px solid black';


const tdNum1 = document.createElement('td');
const tdNum2 = document.createElement('td');
const tdNum3 = document.createElement('td');
const tdNum4 = document.createElement('td');
const tdNum5 = document.createElement('td');
const tdNum6 = document.createElement('td');
const tdNum7 = document.createElement('td');
const tdNum8 = document.createElement('td');
const tdA = document.createElement('td');
tdA.innerText = 'A';
const tdB = document.createElement('td');
tdB.innerText = 'B';
const tdC = document.createElement('td');
tdC.innerText = 'C';
const tdD = document.createElement('td');
tdD.innerText = 'D';
const tdE = document.createElement('td');
tdE.innerText = 'E';
const tdF = document.createElement('td');
tdF.innerText = 'F';
const tdG = document.createElement('td');
tdG.innerText = 'G';
const tdH = document.createElement('td');
tdH.innerText = 'H';
const tdNOT = document.createElement('td');

myCaption.innerText = 'CHESS DESK';
tdNum1.innerText = '1';
tdNum2.innerText = '2';
tdNum3.innerText = '3';
tdNum4.innerText = '4';
tdNum5.innerText = '5';
tdNum6.innerText = '6';
tdNum7.innerText = '7';
tdNum8.innerText = '8';


document.body.appendChild(myDiv);
myDiv.appendChild(myTable);
myTable.appendChild(myCaption);

myTable.appendChild(trNum1);
trNum1.appendChild(tdNum8);
trNum1.appendChild(tdWhiteA8);
trNum1.appendChild(tdGreyB8);
trNum1.appendChild(tdWhiteC8);
trNum1.appendChild(tdGreyD8);
trNum1.appendChild(tdWhiteE8);
trNum1.appendChild(tdGreyF8);
trNum1.appendChild(tdWhiteG8);
trNum1.appendChild(tdGreyH8);

myTable.appendChild(trNum2);
trNum2.appendChild(tdNum7);
trNum2.appendChild(tdGreyA7);
trNum2.appendChild(tdWhiteB7);
trNum2.appendChild(tdGreyC7);
trNum2.appendChild(tdWhiteD7);
trNum2.appendChild(tdGreyE7);
trNum2.appendChild(tdWhiteF7);
trNum2.appendChild(tdGreyG7);
trNum2.appendChild(tdWhiteH7);

myTable.appendChild(trNum3);
trNum3.appendChild(tdNum6);
trNum3.appendChild(tdWhiteA6);
trNum3.appendChild(tdGreyB6);
trNum3.appendChild(tdWhiteC6);
trNum3.appendChild(tdGreyD6);
trNum3.appendChild(tdWhiteE6);
trNum3.appendChild(tdGreyF6);
trNum3.appendChild(tdWhiteG6);
trNum3.appendChild(tdGreyH6);

myTable.appendChild(trNum4);
trNum4.appendChild(tdNum5);
trNum4.appendChild(tdGreyA5);
trNum4.appendChild(tdWhiteB5);
trNum4.appendChild(tdGreyC5);
trNum4.appendChild(tdWhiteD5);
trNum4.appendChild(tdGreyE5);
trNum4.appendChild(tdWhiteF5);
trNum4.appendChild(tdGreyG5);
trNum4.appendChild(tdWhiteH5);

myTable.appendChild(trNum5);
trNum5.appendChild(tdNum4);
trNum5.appendChild(tdWhiteA4);
trNum5.appendChild(tdGreyB4);
trNum5.appendChild(tdWhiteC4);
trNum5.appendChild(tdGreyD4);
trNum5.appendChild(tdWhiteE4);
trNum5.appendChild(tdGreyF4);
trNum5.appendChild(tdWhiteG4);
trNum5.appendChild(tdGreyH4);

myTable.appendChild(trNum6);
trNum6.appendChild(tdNum3);
trNum6.appendChild(tdGreyA3);
trNum6.appendChild(tdWhiteB3);
trNum6.appendChild(tdGreyC3);
trNum6.appendChild(tdWhiteD3);
trNum6.appendChild(tdGreyE3);
trNum6.appendChild(tdWhiteF3);
trNum6.appendChild(tdGreyG3);
trNum6.appendChild(tdWhiteH3);

myTable.appendChild(trNum7);
trNum7.appendChild(tdNum2);
trNum7.appendChild(tdWhiteA2);
trNum7.appendChild(tdGreyB2);
trNum7.appendChild(tdWhiteC2);
trNum7.appendChild(tdGreyD2);
trNum7.appendChild(tdWhiteE2);
trNum7.appendChild(tdGreyF2);
trNum7.appendChild(tdWhiteG2);
trNum7.appendChild(tdGreyH2);

myTable.appendChild(trNum8);
trNum8.appendChild(tdNum1);
trNum8.appendChild(tdGreyA1);
trNum8.appendChild(tdWhiteB1);
trNum8.appendChild(tdGreyC1);
trNum8.appendChild(tdWhiteD1);
trNum8.appendChild(tdGreyE1);
trNum8.appendChild(tdWhiteF1);
trNum8.appendChild(tdGreyG1);
trNum8.appendChild(tdWhiteH1);

myTable.appendChild(trNum9);
trNum9.appendChild(tdNOT);
trNum9.appendChild(tdA);
trNum9.appendChild(tdB);
trNum9.appendChild(tdC);
trNum9.appendChild(tdD);
trNum9.appendChild(tdE);
trNum9.appendChild(tdF);
trNum9.appendChild(tdG);
trNum9.appendChild(tdH);
