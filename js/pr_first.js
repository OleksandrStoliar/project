"use strict";

//Практика №1

//first task 1
const numerOfFilms = +prompt("How many films did you watch?", "");

//second task 2
const personalMovieDB = {
    count: numerOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};

//third task 3
const lastWatchedFilm = prompt("Which film did you watch last?", ""),
      rateLastFilm = prompt("Put the rait of last watched film", "");

personalMovieDB.movies[lastWatchedFilm] = rateLastFilm;

console.log(personalMovieDB);

