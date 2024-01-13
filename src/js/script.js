"use strict";

function padString(str, targetLength, padChar = "*", padRight = true) {
  if (!str) {
    return "рядок не задано";
  }
  if (!targetLength) {
    return "довжина не задана";
  }
  if (typeof str !== "string") {
    return "рядок не є рядком";
  }
  if (typeof targetLength !== "number") {
    return "довжина не є числом";
  }
  if (targetLength < str.length) {
    return str.substring(0, targetLength);
  }
  if (padRight) {
    return str.padEnd(targetLength, padChar);
  } else {
    return str.padStart(targetLength, padChar);
  }
}
console.log(padString("привіт", 8));
console.log(padString("привіт", 7, "*", false));
console.log(padString("привіт", 2));
