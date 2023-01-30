const me = {
  name: {
    first: "Brian",
    last: "Holt",
  },
  location: {
    streetNumber: 500,
    street: "Fakestreet",
    city: "Seattle",
    state: "WA",
    zipcode: 55555,
    country: "USA",
  },
  getAddress() {
    return `${this.name.first} ${this.name.last} ${this.location.streetNumber} 
    ${this.location.street} ${this.location.city}, ${this.location.state}
    ${this.location.zipcode} ${this.location.country}`;
  },
};

console.log(me.getAddress());

const pulledOutGetAddress = me.getAddress.bind(me);

console.log(pulledOutGetAddress());

/////////////////////////////////////////////////

console.log(this === window); //true
console.log(this.scrollY); //randomnumbers
console.log(window.scrollY); //randomnumbers
