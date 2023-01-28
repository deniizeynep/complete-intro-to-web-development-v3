const timeToRepeat = 10;
const character = "🐬";

//bu karakteri alan ve birçok kez tekrarlayan bir döngü

let answer = "";

for (let i = 0; i < timeToRepeat; i++) {
  answer = answer + character;
}

console.log(answer);

//console.log("".padStart(timesToRepeat, character));
//for'la aynı görevi görür

//"🐬🐬🐬🐬🐬🐬🐬🐬🐬🐬"
