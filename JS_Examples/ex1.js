/*
Your task is to write a new function that should be named combine and have the following characteristics:

Accept three input values

Calculate a new value based on the three input values: a * b / c (if a, b & c are the input values)

Return the calculated result

*/

function combine(a, b, c) {
  let result = (a * b) / c;
  return result;
}

console.log(combine(20, 10, 2));
