"use strict";

function greet() {
  console.log(`Привіт, ${this.name}!`);
}
function createUser(name, age) {
  const user = {
    name: name,
    age: age,
  };
  user.greet = greet;
  return user;
}
const user1 = createUser("Вова", 25);
const user2 = createUser("Ольга", 30);
user1.greet(); // Виведе: Привіт, Іван!
user2.greet(); // Виведе: Привіт, Марія!
