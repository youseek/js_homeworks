"use strict";

const potatoWeightInput = +prompt("Введіть вагу картоплі (грами):");
const literInput = +prompt("Введіть бажаний об'єм борщу (літри):");
const priceInput = +prompt("Введіть ціну за кілограм картоплі (грн):");

function round(number) {
  const decimalPart = number % 1;

  if (decimalPart >= 0.5) {
    return Math.ceil(number);
  } else {
    return Math.floor(number);
  }
}

function calculatePotatoPrice(potatoWeight, liter, price) {
  if (!potatoWeight || !liter || !price) {
    throw new Error("Введіть всі параметри");
  }
  if (isNaN(potatoWeight) || isNaN(liter) || isNaN(price)) {
    throw new Error("Введений некоректний параметр");
  }

  const potatoPerLiter = 4 * potatoWeight; // 300g
  const potatoPerVolume = potatoPerLiter * liter; // 14 400g

  const potatoPrice = (potatoPerVolume / 1000) * price;

  return round(potatoPrice);
}

alert(
  `Вартість картоплі на бажану кількість літрів борщу - ${calculatePotatoPrice(potatoWeightInput, literInput, priceInput)}`,
);
