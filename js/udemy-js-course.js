"use strict"

// console.log('Hello World');
//
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }
// function foodProcessor(apples, oranges) {
//     let applePieces = cutFruitPieces(apples)
//     let orangePieces = cutFruitPieces(oranges)
//     const juice = `Jusice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//     return juice
// }
//
// console.log(foodProcessor(2, 3));
//
// const calcAge1 = function (birthYear) {
//     return 2037 - birthYear;
// }
// let yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge1(birthYear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         return retirement
//     } else {
//         return `${firstName} has already retired!`
//     }
//     // return `${firstName} retires in ${retirement} years`;
// }
// console.log(yearsUntilRetirement(1991, 'John'));
// console.log(yearsUntilRetirement(1970, 'Bob'));

// ARROW FUNCTIONS

// let calcAge3 = birthyear => 2037 - birthyear;
// console.log(calcage3(1991));
//
// let yearsUntilRetirement = (birthyear, firstName) => {
//     const age = 2037 - birthyear;
//     const retirement = 65 - age;
//     // return retire
//     return `${firstName} retires in ${retirement} years`
// }
//
//
// console.log(yearsUntilRetirement(1991, "John"));
// console.log(yearsUntilRetirement(1985, "Bob"));



let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let avgDolphin = calcAverage(44, 23, 71);
let avgKoala = calcAverage(65, 54, 49);


let checkWinner = function(team1, team2) {
    if (team1 >= 2 * team2) {
        console.log("dolphins win");
    } else if (team2 >= 2 * team1) {
        console.log("Koalas win");
    } else {
        console.log("no team wins");
    }
}

checkWinner(avgDolphin, avgKoala);







































