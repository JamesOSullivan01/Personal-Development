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



// let calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
//
// let avgDolphin = calcAverage(44, 23, 71);
// let avgKoala = calcAverage(65, 54, 49);
//
//
// let checkWinner = function(team1, team2) {
//     if (team1 >= 2 * team2) {
//         console.log("dolphins win");
//     } else if (team2 >= 2 * team1) {
//         console.log("Koalas win");
//     } else {
//         console.log("no team wins");
//     }
// }
//
// checkWinner(avgDolphin, avgKoala);

// Array practice

// let friends = ['Micheal', 'Steven', 'Peter'];
// console.log(friends);

// let years = [1991, 1984, 2008, 2020];
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);
//
// console.log(friends.length);
// console.log(friends[friends.length - 1]); // returns peter
//
// friends[2] = "jay";
// console.log(friends); //replaces peter with Jay

// Exercise
let calcAge3 = birthyear => 2037 - birthyear;

// let years = [1990,1967, 2002, 2010, 2018];
// let age1 = calcAge3(years[0])
// console.log(age1);

// let ages = [calcAge3(years[0]), calcAge3(years[1]), calcAge3(years[years.length - 1])];
// console.log(ages);

// Array Methods

let friends = ['Micheal', 'Steven', 'Peter'];
let newLength = friends.push('jay');
console.log(friends);
console.log(newLength);
friends.unshift("John"); // adds to the beginining returns length
console.log(friends);


friends.pop(); // removes last element .pop returns the removed element
let popped = friends.pop()
console.log(popped);
console.log(friends);

friends.shift() // removes first elemetn and returns it
console.log(friends);

console.log(friends.indexOf('Steven')); // returns index number

console.log(friends.includes("Steven")); // returns a boolean..uses strict equality

if (friends.includes("Steven")) {
    console.log("You have a friend called steven");
}

// Coding challenge

// let bill = 100;
// console.log(`your bill was ${bill}, the suggested tip is ${tip} your total is ${bill + tip}`);

function calcTip (input) {
    let tip = 0;
    if ( input < 49 && input > 300) {
        tip = (input * 0.15);
    } else {
        tip = (input * 0.20);
    }
    let billTotal = input + tip;
    return billTotal;
}

// console.log(calcTip(bill));
// let bills = [125, 555, 44];
// for (let i = 0; i < bills.length; i++) {
//     console.log(calcTip(bills[i]));
// }


// Objects
//order in which we retrieve objects does not matter
// let jonasObj = {
//     firstName: 'Jonas',
//     lastName: 'Smith',
//     age: 2037 - 1991,
//     job: 'Teacher',
//     friends: ['Micheal', 'Peter', 'Steven']
// };

// dot vs. bracket notation

// console.log(jonasObj);
// //dot notation
// console.log(jonasObj.lastName);
// // bracket notation...
// console.log(jonasObj['lastName']);
//
// let nameKey = 'Name';
// console.log(jonasObj['first' + nameKey]);
// console.log(jonasObj['last' + nameKey]);

// let interestedIn = prompt('What do you want to know about Jonas? Choose between firstname, lastname, age, job, anf friends.')
// console.log(interestedIn);
// console.log(jonasObj[interestedIn]);

// if (jonasObj[interestedIn]) {
//     console.log(jonasObj[interestedIn])
// } else {
//     console.log('wrong request!')
// }

// jonasObj.location = 'Texas';
// jonasObj['twitter'] = '@something';
// console.log(jonasObj);

// challenge

// console.log(`${jonasObj.firstName} has ${jonasObj.friends.length} friends, his best friend is called ${jonasObj.friends[0]}`);

// Object methods

// You can add functions to object values

let jonasObj = {
    firstName: 'Jonas',
    lastName: 'Smith',
    birthYear: 1991,
    job: 'Teacher',
    friends: ['Micheal', 'Peter', 'Steven'],
    hasDriversLicense: true,

    // calcAge3: function(birthYear) {
    //     return 2037 - 1991
    // }

    // calcAge3: function() {
    //     // console.log(this);
    //     return 2037 - this.birthYear //'this' is referring to the jonasObj.


    calcAge3: function () {
        this.age = 2037 - this.birthYear
        return this.age;
    },
    getSummary: function() {
      return `${jonasObj.firstName} ${jonasObj.lastName} is ${this.calcAge3()} years old. He lives in ${jonasObj.location} and was born in ${jonasObj.birthYear}. This guy has ${jonasObj.friends.length} friends and his best friend is ${jonasObj.friends[0]}`
    }
};

jonasObj.location = 'Texas';
console.log(jonasObj);
console.log(jonasObj.getSummary());

// Any function attached to an object is called a method

console.log(jonasObj.calcAge3());


let markObj = {
    firstName: 'Mark',
    lastName: 'Smith',
    weight: 78,
    height: 1.69,

    calcBmi: function () {
       this.bmi = this.weight / this.height **2
        return this.bmi
    }
}

// You MUST call the method you created in order for it to be stored in the object like on line 237
markObj.calcBmi()
console.log(markObj);

let johnObj = {
    firstName: 'John',
    lastName: 'Miller',
    weight: 92,
    height: 1.95,

    calcBmi: function () {
        this.bmi = this.weight / this.height **2
        return this.bmi
    }
}

johnObj.calcBmi();
console.log(johnObj);

if (markObj.bmi > johnObj.bmi) {
    console.log(`${markObj.firstName} ${markObj.lastName}'s bmi (${markObj.bmi}) is higher than ${johnObj.firstName} BMI (${johnObj.bmi})`);
} else {
    console.log(`${johnObj.firstName} ${johnObj.lastName}'s bmi (${johnObj.bmi}) is higher than ${markObj.firstName} BMI (${markObj.bmi})`);
}

// Loops

for(let i = 1; i <= 10; i+=5) {
    console.log(`ligting weights rep ${i}`);
}

// looping arrays


let jimmyArray = ['Jimmy', 'OSullivan', 2037 - 1986, 'business-owner', ['Ashley', 'Aj', 'Joel'], true];

// console.log(jimmyArray);
let typesArray = [];

// for (let i = 0; i < jimmyArray.length; i++) {
//     console.log(jimmyArray[i], typeof jimmyArray[i]);
//     // typesArray[i] = typeof jimmyArray[i];
//     typesArray.push(typeof jimmyArray[i]);
// }

console.log(typesArray);

let years = [1990,1967, 2002, 2010, 2018];
let ages = [];
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);


for (let i = 0; i < jimmyArray.length; i++) {
    if (typeof jimmyArray[i] !== 'string') continue;
    console.log(jimmyArray[i], typeof jimmyArray[i]);
};

// loops in loops

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`--------- Starting exercise ${exercise}`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting weight rep ${rep}`);
    }
}

// while loop
let reps = 1
while (reps <= 10) {
    console.log(`----${reps}`);
    reps++;
}

// no counter while loop

let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 5) {
    console.log(`you rolled a ${dice}`);
    dice = Math.floor(Math.random() * 6) + 1;

}

let bills = [22, 295, 176,440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totalAmount = [];

function calcTip(input) {
    for (let i = 0; i < input.length; i++) {
        let tip = input[i] >= 50 && input[i] <= 300 ? input[i] * 0.15 : input[i] * 0.20;
        tips.push(tip);
        totalAmount.push(tip + input[i]);
    }
}

calcTip(bills);
console.log(tips);
console.log(totalAmount);
