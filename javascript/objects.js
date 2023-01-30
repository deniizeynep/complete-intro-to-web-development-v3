const person = {
  name: "Brian Holt",
  city: "Seattle",
  state: "WA",
  favoritefood: "🌮",
  wantsTacosRightNow: true,
  numberOfTacosWanted: 100,
};

console.log(person);
console.log(person.name);
console.log(person["city"]); //ikisi aynı şey
const propertyName = "city"; //bu da aynı şeyi ekrana yazdırır

//başka bir örnek:

const person1 = {
  name: "Angie",
  ageRange: "25-35",
};
const person2 = {
  name: "Francesca",
  ageRange: "65-75",
};

function suggestMusic(person) {
  if (person.ageRange === "25-35") {
    console.log("We think you will like Daft Punk.");
  } else if (person.ageRange === "65-75") {
    console.log("You are obviously going to like Johnny Cash.");
  } else {
    console.log(
      "Uh, maybe try David Bowie? Everyone likes David Bowie, right?"
    );
  }
}

suggestMusic(person1);
suggestMusic(person2);

//başka bir örnek:

const dog = {
  name: "Luna",
  speak() {
    console.log("woof woof");
  },
};

dog.speak();

//başka bir örnek:

const me = {
  name: {
    first: "Brian",
    last: "Holt",
  },
  location: {
    city: "Seattle",
    state: "WA",
    country: "USA",
  },
};

console.log(me.name.first);
console.log(me.location.state);
