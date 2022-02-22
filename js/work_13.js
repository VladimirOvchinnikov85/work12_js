"use strict";

                            //      урок 13
/*if (4 == 9) {
   console.log("ok!");            // ни чего не покажет
}

if (4 == 4) {
    console.log("ok!");            // ok! в консоли
 }

 if (4 == 9) {
    console.log("ok!");            // ни чего не покажет
 } else {
     console.log('error!');          // error!
 }

 const num = 50;
 if (num < 50) {
    console.log('error!');                                // 
} else if(num > 100) {
    console.log('много!');          // 
} else {
    console.log('ok!');             //ok!
}


// если num ===50, то ок!, иначе error! 
(num === 50) ?  console.log('ok!') : console.log('error!'); //- тернарный оператор

             // модифиеация  многих if -это switch !!!!!!!!!!

const l =50;
switch (l) {          
   case 49:        // switch работает на строгое соответствие 49=50?
      console.log('не верно!');  //   если l=49? , то в консоль ('не верно!')
        break;     // обязательно прописывать, хуй пойми зачем.
    case 100:        
    console.log('не верно!');  
        break;
    case 150:        
    console.log('не верно!');  
        break;
    case 50:        
    console.log('верно!');  //выполниться
        break;   
    default:                                 //если не выполнится не один case
        console.log('не в этот раз(((');
        break;
    }*/

                                  //    урок 14      ЦИКЛЫ

let num = 50;               
// 50  51  52  53  54  
while(num < 55) {
     console.log(num); 
        num++;
    } 
    

do {
    // 55 -> 56
    console.log(num);             
        num++;
     }
while(num < 55);

for (let i=1; i<8; i++) {   //  let=i- задаём пер-ю; i<8- зн-я пер-й <8; +1 с каждым циклом
console.log(i);             //         1  2  3  4  5  6  7
}

// 56 -> 62
for (let i=1; i<8; i++) {   
    console.log(num);             
    num++;
}
     
// 1  2  3  4  5               break
for (let i=1; i<10; i++) {
   if (i ===6) {
break;
   }
    console.log(i); 
}

   // 1  2  3  4  5    7  8  9   continue
for (let i=1; i<10; i++) {
    if (i ===6) {
 continue;
    }
     console.log(i); 
 }