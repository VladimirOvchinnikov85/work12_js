"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const lastFilm = prompt("Один из последних просмотренных фильмов?"),
    gradeFilm = prompt('На сколько его оцениваете?'),
    lastFilm2 = prompt("Один из последних просмотренных фильмов?"),
    gradeFilm2 = prompt('На сколько его оцениваете?');

personalMoviesDB.movies[lastFilm] = gradeFilm;
personalMoviesDB.movies[lastFilm2] = gradeFilm2;

    
console.log(personalMoviesDB);      // создать контрольную точку на GitHub !!!!!!!!!!!!!!!!!


    
