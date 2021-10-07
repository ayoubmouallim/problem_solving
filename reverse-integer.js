/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  isNegatif = false;

  if (x < 0) {
    x = x * -1;
    isNegatif = true;
  }

  let reversedNumberToArray = x
    .toString()
    .split("")
    .reverse();

  let number = Number(reversedNumberToArray.join(""));

  if (number < Math.pow(2, 31) * -1 || number > Math.pow(2, 31) - 1) return 0;
  if (isNegatif == true) return number * -1;
  else return number;
};

console.log("number");
console.log("number", reverse(1534236469));
console.log("number", reverse(-2147483412));
