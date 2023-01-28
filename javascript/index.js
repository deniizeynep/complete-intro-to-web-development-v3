const myName = "Brian Holt";
console.log(myName);

const firstName = "Brian";
const lastName = "Holt";

const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);
console.log(sentenceWithTemplate);

const skyIsBlue = true;

if (skyIsBlue) {
  console.log("The sky is blue?");
} else {
  console.log("The sky is ... not blue?");
}

// üç satır görürseniz, sadece üç = üst üste, ===. yazı tipi onları büyük bir karakterde birleştirir
if (2 + 2 === 4) {
  console.log(
    "Oh thank god, the fundamental principles of mathmatics atill hold true."
  );
} else {
  console.log("Uh,panic?");
}
