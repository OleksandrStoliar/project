/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done'); 
        } else {
            console.log('Error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < -0) {
        alert("Произошла ошибка");
    } else if (personalMovieDB.count == 0) {
        alert("Вы не посмотрели ни одного фильма");
    } else if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 0) {
        alert("Вы киноман");
    }
}
detectPersonalLevel();

console.log(personalMovieDB);

//#2 Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
//false - выводит в консоль главный объект программы

function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB); 
    }
}
showMyDB();

//#3 Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
//"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let bestGenre = prompt(`Ваш любимый жанр под номером ${i}`, '');
            while (bestGenre == '' || bestGenre == null) {
                bestGenre = prompt(`Ваш любимый жанр под номером ${i}`, ''); 
            }
        //personalMovieDB.genres[i - 1] = bestGenre;
        personalMovieDB.genres.push(bestGenre); 
    }
}
writeYourGenres();

console.log(personalMovieDB);