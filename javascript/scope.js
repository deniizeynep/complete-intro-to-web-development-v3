function addFive(number) {
  const someVariable = "you can't see me outside this function";
  console.log(someVariable);
  return number + 5;
}

addFive(10);
console.log(someVariable);

//değişken scope içerisindeyse çalışmaz, scope içerisine yazdırırsak çalışır.

let friendsAtYourParty = 0;
for (let i = 0; i <= 10; i++) {
  console.log(i);
  friendsAtYourParty++;
}

console.log(i);

//aynı şekilde bu da çalışmaz çünkü i scope'da

console.log(myName);
const myName = "Brian";
//çallışmaz, çünkü ilk başta okuyor daha sonra değişkene geliyor, ilk de tanımlanan bir şey arıyor ama bulamıyor.

sayHi();

function sayHi() {
  console.log("hi!");
}
//çalışır, çünkü otomatik olarak fonksiyonu yukarı taşır  ve öyle okur.
