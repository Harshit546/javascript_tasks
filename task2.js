function sumNumbers(str) {
  return str.split(",").map(Number).reduce((a, b) => a + b, 0);
}

console.log(sumNumbers("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9")); // 57.3
