function addTwo(number) {
  return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);

const otherAnswer = addTwo(10);
console.log(otherAnswer);

//başka bir örnek:

function greet(firstName, lastName, honorific, greeting) {
  return `${greeting} ${honorific} ${lastName}! I'm extremely pleased you 
  could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}. `;
}

console.log(greet("Brian", "Holt", "Lord", "Salutations"));
console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));

//başka bir örnek:

const myHomeCity = "Seattle";
const myHomeState = "Washington";
const myHomeCountry = "USA";

function logOutYourHome(city, state, country) {
  console.log(`You are from ${city}, ${state}, ${country}.`);
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry);
logOutYourHome("İzmir", "İstanbul", myHomeCountry);
logOutYourHome("Ankara", "Bayburt", "Afyonkarahisar");

//başka bir örnek:

//fonksiyon şeklinde yazılabilir
function bark() {
  console.log("woof");
}

//değişken şeklinde yazılabilir
const meow = function () {
  console.log("meeeeeeeow");
};

//bu şekilde de yazılabilir hepsi aynı ekran çıktısını verecektir. let veya var'da kullanılabilir.
const chirp = () => {
  console.log("chirp chirp");
};

//hepsi fonskiyon olduğu için console.log içerisine yazmadık ama yazsaydık da bu şekilde yazılırdı.
bark();
meow();
chirp();
