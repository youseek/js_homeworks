"use strict";

const arr = [1, 2, 3, -1, -2, -3];
function filterArrToPositive(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Argument is not an array");
  }
  if (arr.length === 0) {
    throw new Error("Array is empty");
  }
  const resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      resultArr.push(arr[i]);
    }
  }
  console.log(resultArr);
  return resultArr.length === 0 ? null : resultArr;
}
filterArrToPositive(arr);
