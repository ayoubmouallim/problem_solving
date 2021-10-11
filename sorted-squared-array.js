// slow solution
function sortedSquaredArray(array) {
  return array.map((e) => e ** 2).sort((a, b) => a - b);
}
// linear complexity solution : o(n)
function sortedSquaredArray2(array) {
  let newArray = [];
  let firstPointer = 0;
  let lastPointer = array.length - 1;

  for (let index = array.length - 1; index >= 0; index--) {
    if (Math.abs(array[firstPointer]) > array[lastPointer]) {
      newArray[i] = array[firstPointer] ** 2;
      firstPointer++;
    } else {
      newArray[i] = array[lastPointer] ** 2;
      lastPointer++;
    }
  }
}

console.log(sortedSquaredArray([1, 2, 3]));
