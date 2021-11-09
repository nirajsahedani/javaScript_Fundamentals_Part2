/*
"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");
*/

/*
//function
function logger() {
  console.log("My name is niraj");
}

//calling / running /invoking function
logger();
logger();

function fruits(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruits(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruits(3, 2);
console.log(appleOrangeJuice);
*/

/*
//function declaration
function calcAge1(birthYear) {
  return 2021 - birthYear;
}

const age1 = calcAge1(1999);

//function expression
const calcAge2 = function (birthyear) {
  return 2021 - birthyear;
};
const age2 = calcAge2(1999);

console.log(age1, age2);
*/

/*
//Arrow function
const calcAge3 = (birthyear) => 2021 - birthyear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthyear, firstName) => {
  const age = 2021 - birthyear;
  const retirements = 65 - age;
  return `${firstName} retires in ${retirements} years`;
};

console.log(yearsUntilRetirement(1999, "Niraj"));
*/

/*
//Function call other function
function cutOfFruits(fruit) {
  return fruit * 4;
}

function fruits(apples, oranges) {
  const appleCutsPieces = cutOfFruits(apples);
  const orangeCutsPieces = cutOfFruits(oranges);
  const juice = `Juice with ${appleCutsPieces} apples and ${orangeCutsPieces} oranges`;
  return juice;
}

console.log(fruits(3, 6));
*/

/*
//Reviewing Function

const calcAge = function (birthYear) {
  return 2021 - birthYear;
};
const yearsUntilRetirement = function (birthyear, firstName) {
  const age = calcAge(birthyear);
  const retirements = 65 - age;
  if (retirements > 0) {
    console.log(`${firstName} retires in ${retirements} years`);
    return retirements;
  } else {
    console.log(`${firstName} has alredy retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1999, "Niraj"));
*/

/*
//Intro Array

const friend1 = "jayal";
const friend2 = "digesh";
const friend3 = "sagar";

const friend = ["jayal", "digesh", "sagar"];
console.log(friend);

const year = new Array(2019, 2020, 2021);

console.log(friend[1]);
console.log(friend.length);
console.log(friend[friend.length - 1]);

friend[2] = "yash";
console.log(friend);

// const friend = ["kunal", "het"];

const firstName = "Niraj";
const niraj = [firstName, "Sahedani", 2021 - 1999, "Developer", friend];
console.log(niraj);
console.log(niraj.length);

const calcAge = function (birthyear) {
  return 2021 - birthyear;
};

const years = [1995, 1970, 2001, 2012, 2018];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];

console.log(ages);
*/

/*
//Array Methods

const friend = ["jayal", "digesh", "sagar"];

//Add Elements
const newElementAdd = friend.push("yash"); // push method add element in last index of array
console.log(friend);
console.log(newElementAdd); // If we console push elements so it's return length of array

friend.unshift("dherya"); //unshift method add element in first index of array
console.log(friend);

//Remove Elements
friend.pop(); //pop method remove last element of array
const popped = friend.pop(); //store remove elemet
console.log(popped);
console.log(friend);

friend.shift(); //shift method remove first elemet of array
console.log(friend);

console.log(friend.indexOf("digesh")); //indexof return index if pass value correct
console.log(friend.indexOf("yash")); //indexof return minus value if pass data is not correct

friend.push(15);
console.log(friend.includes("digesh")); //includes return true or false
console.log(friend.includes("yash"));
console.log(friend.includes(15));

if (friend.includes("digesh")) {
  console.log("digesh is your friend");
}
*/

/*
//Intro Object

const niraj = {
  firstName: "Niraj",
  lastName: "Sahedani",
  age: 2021 - 1999,
  job: "Develper",
  friends: ["jayal", "digesh", "sagar"],
};

console.log(niraj);
console.log(niraj.lastName); //Dot Notation
console.log(niraj["lastName"]); //Bracket Notation

//bracket notation ex 1
const nameKey = "Name";
console.log(niraj["first" + nameKey]); //niraj.firstName
console.log(niraj["last" + nameKey]);

//bracket notation ex 2
const interstedIn = prompt(
  "What do you want to know about niraj? choose between firstName , lastName , age , job and friends"
);

if (niraj[interstedIn]) {
  console.log(niraj[interstedIn]);
} else {
  console.log(
    "wrong input! choose between firstName , lastName , age , job and friends"
  );
}

niraj.location = "India";
niraj["mail"] = "niraj@.com";
console.log(niraj);

console.log(
  niraj.firstName +
    " has " +
    niraj.friends.length +
    " Friends , and his best friend is called " +
    niraj.friends[0]
);
*/

/*
//Object Methods

const niraj = {
  firstName: "Niraj",
  lastName: "Sahedani",
  birthYear: 1999,
  job: "Develper",
  friends: ["jayal", "digesh", "sagar"],
  hasDriverLicense: false,

  calcAge: function () {
    //console.log(this);
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${niraj.firstName} is a ${niraj.age}-year old ${
      niraj.job
    } and he has ${this.hasDriverLicense ? "a" : "not"} driver's license`;
  },
};

console.log(niraj.calcAge());
console.log(niraj.age);
console.log(niraj.getSummary());
*/

/*
//For loop intro

for (let i = 1; i <= 10; i++) {
  console.log(`repeting loop ${i}`);
}
*/

/*
//Looping Arrays , Breaking and countinuing

const niraj = [
  "Niraj",
  "Sahedani",
  2021 - 1999,
  "Develper",
  ["jayal", "digesh", "sagar"],
  false,
];

const types = [];

for (let i = 0; i < niraj.length; i++) {
  //reading from array
  console.log(niraj[i]);

  //Filling array
  // types[i] = typeof niraj[i];
  types.push(typeof niraj[i]);
}

console.log(types);

const years = [1995, 1970, 2001, 2012, 2018];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages[i] = 2021 - years[i];
}

console.log(ages);

//countinue and break

console.log("only String");
for (let i = 0; i < niraj.length; i++) {
  if (typeof niraj[i] !== "string") continue;
  console.log(niraj[i], typeof niraj[i]);
}

console.log("only Number");
for (let i = 0; i < niraj.length; i++) {
  if (typeof niraj[i] === "number") break;
  console.log(niraj[i], typeof niraj[i]);
}
*/

/*
//looping backwards

const niraj = [
  "Niraj",
  "Sahedani",
  2021 - 1999,
  "Develper",
  ["jayal", "digesh", "sagar"],
  false,
];

for (let i = niraj.length - 1; i >= 0; i--) {
  console.log(i, niraj[i]);
}

//loops in loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----------Starting Exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}:lifting weight repetition ${rep}`);
  }
}
*/

//While loop

let rep = 1;
while (rep <= 10) {
  console.log(`While: lifting weights repetation ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rooled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log("Loop is about to end...");
  }
}
