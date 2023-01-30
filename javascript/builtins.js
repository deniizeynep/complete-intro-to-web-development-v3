const sentence = "ThIs HaS wEiRd CaSiNg On It";
const lowerCaseSentence = sentence.toLowerCase();
//toUpperCase() = bütün harfler büyük, toLowerCase() bütün harfler küçük.

console.log(lowerCaseSentence);

//başka bir örnek:

const number = 5.3;
const roundedNumber = Math.round(number);

console.log(number);

//başka bir örnek:

const Number = Math.random();
console.log(number);

//başka bir örnek:

const testStringOne = "The quick brown fox jumps over the lazy dog";
const testStringTwo =
  "Mirror, mirror on the wall, don't say it cause I know I'm cute";
const stringToLookFor = "cute";

console.log(testStringOne.includes(stringToLookFor));
console.log(testStringTwo.includes(stringToLookFor));

//başka bir örnek: üsttekine eklenti

const testStringThree = "execute";

console.log(testStringOne.includes(stringToLookFor));
console.log(testStringTwo.includes(stringToLookFor));
console.log(testStringThree.includes(stringToLookFor));

//başka bir örnek:

console.log(Date.now());
