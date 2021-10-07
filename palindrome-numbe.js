/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let reversedArray = [];
  let normalArray = [];
  let normalString = x.toString();

  if (x < 0) return false;
  // if x is positif
  //reverse number
  for (i = 0; i < normalString.length(); i++) {
    reversedArray.unshift(normalString.charAt(i));
    normalArray.push(normalString.charAt(i));
  }
  for (i = 0; i < normalArray.length(); i++) {
    if (reversedArray[i] !== normalArray[i]) return false;
  }
  return true;
};
