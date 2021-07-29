"use strict";

//alert('Hello');

//const result = confirm('Are you here?');
//console.log(result);

//const answer = +prompt('Are you older than 18?','18');
//console.log(typeof(answer));

//const answers = [];

//answers[0] = prompt("What's your name?","");
//answers[1] = prompt("What's your last name?","");
//answers[2] = prompt("What's your age?","");

//const category = 'toys';

//console.log(`https://someurl.com/${category}/5`);

//const user = 'Sasha';

//alert(`Hello, ${user}`);

//let incr = 10,
//   decr = 10;


//console.log(incr++);
//console.log(decr--);

//const isChecked = false,
//      isClose = true;

//console.log(isChecked && isClose && isClose);
//console.log(isClose || isChecked || isClose);




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