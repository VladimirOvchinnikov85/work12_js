"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){  //isNaN- проверяет на число.
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}
// start();

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i=0; i<2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?",''),
           b = prompt("На сколько его оцениваете?",''); 
   
       // null - отображается когда пользователь ввел  значения и стёр его   
       if (a != null && b !=null && a != '' && b !='' && a.length < 50) { 
           personalMoviesDB.movies[a] = b;
        } else {
           i--; 
        } 
    }
}
// rememberMyFilms();
   
function detectPersonalLevel() {
    if (+personalMoviesDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (+personalMoviesDB.count >= 10 && +personalMoviesDB.count< 30) {
        alert("Вы классический зритель");
    } else if (+personalMoviesDB.count>=30) {
        alert('Вы киноман');
    } else {
        alert('Поизошла ошибка');
    } 
}

function showMyDB() {
    if (!personalMoviesDB.privat) {
      return console.log(personalMoviesDB);
    }
}

 function writeYourGenres() {
    for (let i=1; i<=3; i++) {
        personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}?`);
       
    }
 }
 writeYourGenres();
 console.log(personalMoviesDB);
//detectPersonalLevel();
//console.log(personalMoviesDB);  
/*let lastFilm = '';
    
    while (lastFilm.length < 1 || lastFilm.length > 50) {
        lastFilm = prompt("Один из последних просмотренных фильмов?");
    }

    let gradeFilm = '';
    
    while (gradeFilm.length < 1 || gradeFilm.length > 50) {
        gradeFilm = prompt("На сколько его оцениваете?");
    }
    personalMoviesDB.movies[lastFilm] = gradeFilm;
    console.log(i);*/

     // создать контрольную точку на GitHub !!!!!!!!!!!!!!!!!


    
