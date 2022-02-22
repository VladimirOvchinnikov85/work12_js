"use strict";     
                
                
                     //    СТЕЛОЧНЫЕ ФУНКЦИИ
      
let num = 20;               
function showFirstMessage(f,t) {
    console.log(f+t);
    //let num = 10;
    console.log(num);
}
showFirstMessage("Hello World", 'yufuy');   //задаём значение ф-ии
console.log(num); 

function calc(a, b) {
    return (a+b); //после  return ф-я заканчивается. далее код не читается
}
console.log(calc(4, 3));
console.log(calc(5, 6));



function ret() {
    let num =50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('Hello');
};
logger();

const calcs =(a, b) =>a+b;   // созд. перемен. calcs, в кот-ю помещаем стрелочную ф-юю.
console.log(calcs(5, 6));
