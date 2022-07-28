"use strict";

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Last watched film?', ''),
//       b = prompt('Rate of it?', ''),
//       c = prompt('Last watched film?', ''),
//       d = prompt('Rate of it?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);



// УСЛОВИЯ

// if (4 == 9){
//     console.log('ok!');
// } else{
//     console.log('error');
// }





// const num = '50';

// if( num < 49){
//     console.log('Error');
// } else if (num>100){
//     console.log('A lot');
// } else{
//     console.log('Ok!')
// }


// (num === 50) ? console.log('Ok!') : console.log('Error'); 


// switch(num){
//     case '49':
//         console.log('Not correct');
//         break;
//     case '100':
//         console.log('Not correct');
//         break;
//     case '50':
//         console.log('Correct');
//         break;
//     default:
//         console.log('not this time');
//         break            
// }


// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// const hamburger = 5;
// const fries = 0;

// if (hamburger && fries) {
//     console.log('ok');
// }


// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'string');

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('Все сыты');
// } else {
//     console.log('Мы уходим')
// };

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('Все довольны');
// } else {
//     console.log('Мы уходим')
// };

// console.log(hamburger || cola || fries);


// let johnReport, AlexReport, samReport, mariaReport = 'done';

// console.log(johnReport || AlexReport || samReport || mariaReport);




// Циклы



// let num = 50;
// while ( num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++; 
// }

// while (num < 55);

// for (let i = 1; i < 100; i++){
//     if ( i === 6){
//         // break;
//         continue;
//     }
//     console.log(num);
    
    
// }

// let num = 10;

// for (let i = 1; i <=90; i++){
//     console.log(num);
//     num++;

//     if (num === 37){
//         break;
//     }
// }




// for (let i = 0; i <=10; i++){
//     const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
//     if(numberOfFilms == 0){
//         alert("Произошла ошибка");
//     }
//     if(numberOfFilms>0){
//         if(numberOfFilms <= 10){
//             alert("Просмотрено довольно мало фильмов");
//         }
//         if(numberOfFilms > 10 && numberOfFilms <= 30){
//             alert("Вы классический зритель");
//         }
//         if(numberOfFilms > 30){
//             alert("Вы киноман");
//         }
//         break;
//     }   
// }


// Функции


// FUNCTION DECLARATION - создается до начала віполнения скрипта

// let num = 20;

// function showFirstMessage(text){
//     console.log(text);
//     console.log(num);
// }

// showFirstMessage("hello");
// console.log(num);

// function calc (a, b){
//     return (a + b);
// }


// console.log(calc(10,15));

// function ret(){
//     let num = 50;
//     return (num);
// }

// const anotherNum = ret();
// console.log(anotherNum);


// FUNCTION EXPRESSION - создается только тогда когда до нее доходит поток

// const logger = function(){
//     console.log('Hello')
// };

// logger();

// СТРЕЛОЧНЫЕ ФУНКЦИИ

// const calc = (a, b) => {
//     console.log(a + b);
//     return a + b;
// };

// calc(5, 4);

// let num = 20;

// function calc(){
//     let num = 50;
//     return num;
// }
//  calc();

// console.log(calc());

// Аргументы Функции

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result){
//     console.log(result * discount);
// }

// const res = convert(500, usdCurr)
// promotion(res);


// function test() {
//     for( let i = 0; i < 5; i++){
//         console.log(i)
//         if(i === 3) return
//     }
//     console.log('Done');
// }

// test()

// function doNothing(){};
// console.log(doNothing() === undefined);


// Методы и свойства у строк и чисел

// const str = "tEst";


// console.log(str.toLowerCase());
// console.log('test');

// const fruit = "Some fruit";

// console.timeLog(fruit.indexOf("fruit"));

// const logg = "antonova";

// console.log(logg.slice(-5,-1));

// const test = "12.2px";
// console.log(parseInt())


// Практика Ч3

// let numberOfFilms;


// function start(){
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms ==null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        
//     }
// }

// start();
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };



// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++){
//         const a = prompt('Last watched film?', ''),
//               b = prompt('Rate of it?', '');
//         if (a != null && b != null && a != '' & b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel(){
//     if (personalMovieDB.count < 10) {
//         console.log("A little");
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//         console.log("middle");
//     } else if (personalMovieDB.count > 30) {
//         console.log(" A lot");
//     }else{
//         console.log('Error');
//     }
// }

// detectPersonalLevel();

// console.log(personalMovieDB);

// let genres = [];

// function writeYourGenres(){
//     for (let i = 0; i < 3; i++){
//         genres[i] = prompt('Ваш любимый жанр под номером:', "1,2,3");  
//     } 
// }

// writeYourGenres();

// console.log(genres);


// ОБЪЕКТЫ

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
// };

// console.log(options.name)

// delete options.name;

// console.log(options)

// for(let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }
// options.makeTest()
// console.log(Object.keys(options).length);

// const {border, bg} = options.colors;
// console.log(border)

// const{makeTest} = options;
// makeTest()


const car = {
    maker: 'Mitsubishi',
    model: 'Lancer',
    yearOfBuild: 2006,
    fuelTankCapacity: 40,
    fuelUsePer100: 12,


};

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
};

const newObj = Object.seal({...car, ...options});
console.log(newObj);

newObj.name = 'Tom';
newObj.Hello = 'Hi';
newObj.Buy = 'buy';
console.log(newObj);

// for(let key in user){
//     if(typeof(user[key])==='object'){
//         for(let i in user[key]){
//             console.log(user[key][i]);
//         }
//     }else{
//         console.log(user[key])
//     }
// }