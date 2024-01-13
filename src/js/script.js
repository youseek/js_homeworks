"use strict";

const number = +prompt("Введіть число");
const power = +prompt("Введіть ступінь");

function pow(number, power = 1) {
  if (isNaN(number) || isNaN(power)) {
    return "Помилка введення даних";
  }

  return number ** power;
}

alert(pow(number, power));
