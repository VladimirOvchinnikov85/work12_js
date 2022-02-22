"use strict";  

const str = "test";
console.log(str.length); // выдаст количество символов в "test", это 4

const arr = [1, 2, 4];
console.log(arr.length);  //выдаст кол-во эл-ов в массиве "arr" это -3

console.log(str[2]);     // получим букву "s" из "test"

                               //метод изменения регистра

console.log(str.toUpperCase());         //   "TEST"
console.log(str.toLowerCase());         //    нижний регистр   "test"

                             // поиск подстроки( поиск куска текста)
let fruit ="Some fruit dohot";
console.log(fruit.indexOf('uit'));  //выдаст 7- с 7-го символа начинается  uit


                                  // 3 метода изменять текст
                                  //1 метод   slice

const logg = "Hello World";
console.log(logg.slice(6,11));   // вырезает кусок текста с 6-11 эл-т World
  
                                         // 2 метод   substring

console.log(logg.substring(6,11));   //то же самое , только нельзя вводить отрицательные значения с хвоста текста

                                      //     3 метод    substr
                        
console.log(logg.substr(6, 3));        // после указания начала, следующее число указ-ет кол-во вырезаемых символов

                                      // ЧИСЛА


const num = 12.2;
console.log(Math.round(num));    // метод округление Math.round  =12

const test = "12.2px";
console.log(parseInt(test));    //получится 12, когда применяется к строке... строка обрезается до целого числа и вы-т число 12
console.log(parseFloat(test));   //  12.2 возвращает с дробными значениями

