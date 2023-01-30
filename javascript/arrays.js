const dayOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

console.log(dayOfTheWeek);
console.log(dayOfTheWeek[0]);
console.log(dayOfTheWeek[1]);
console.log(dayOfTheWeek[6]);

//başka bir örnek:

const primeNumber = [1, 2, 3, 5, 7, 11, 13, 17];

console.log(primeNumber.length);
console.log(primeNumber.join(" | "));

//başka bir örnek:

const courses = [
  { teacher: "Will Sentance", course: "Javascript: The Hard Parts" },
  { teacher: "Sarah Drasner", course: "Intro to Vue" },
  { teacher: "Brian Holt", course: "Complete Intro to React" },
  { teacher: "Steve Kinney", course: "Build Your Own Programming Language" },
  { teacher: "Scott Mos", course: "Intro to Node.js" },
];

console.log(courses.length);

courses.push({ teacher: "Jen Kramer", course: "Getting Started with CSS" });

console.log(courses.length);
const jen = courses.pop();
console.log(jen);

courses[2] = { teacher: "Brian Holt", course: "Complete Intro To Database" };

console.log(courses.length);

console.log(courses.shift());

courses.unshift(jen);

//Iterating an Array:

const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong",
];

//method 1
for (let i = 0; i < cities.length; i++) {
  console.log(i, cities[i], "lol");
}

//method 2
cities.forEach(function (city) {
  console.log(city);
});

//veya
let timesCalled = 0;
function logCity(city) {
  console.log(timesCalled, city);
  timesCalled++;
}

cities.forEach(logCity);
