"use strict";

let generatedNumbers = [];

function getRandomUniqueNumber() {
  let randomNumber = Math.floor(Math.random() * 100);
  while (generatedNumbers.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 100);
  }
  generatedNumbers.push(randomNumber);
  if (generatedNumbers.length === 100) {
    generatedNumbers = [];
  }
  return randomNumber;
}
for (let i = 0; i < 100; i++) {
  console.log(getRandomUniqueNumber());
}
