'use strict';

/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
        secondQuestion = prompt('На сколько оцените его?', '');

    if (firstQuestion !== null && secondQuestion !== null &&
        firstQuestion !== '' && secondQuestion !== '' && firstQuestion.length < 50) {
        personalMovieDB.movies[firstQuestion] = secondQuestion;
    } else {
        console.log('Error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);

/* Альтернативный способ с помощью цикла while */

let i = 0;

while (i < 2) {
    const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
        secondQuestion = prompt('На сколько оцените его?', '');

    i++;

    if (firstQuestion !== null && secondQuestion !== null &&
        firstQuestion !== '' && secondQuestion !== '' && firstQuestion.length < 50) {
        personalMovieDB[firstQuestion] = secondQuestion;
    } else {
        console.log('Error!');
        i--;
    }
}

/* Альтернативный способ с помощью цикла do...while */

let counter = 0;

do {
    const firstQuestion = prompt('Один из последних просмотренных фильмов?', ''),
        secondQuestion = prompt('На сколько оцените его?', '');

    counter++;

    if (firstQuestion !== null && secondQuestion !== null &&
        firstQuestion !== '' && secondQuestion !== '' && firstQuestion.length < 50) {
        personalMovieDB[firstQuestion] = secondQuestion;
    } else {
        console.log('Error!');
        counter--;
    }
} while (counter < 2);