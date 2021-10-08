function findMedian(arr) {
  // Write your code here

  console.log(parseInt(arr.length / 2));
  console.log(arr.sort());
  console.log(arr.sort()[parseInt(arr.length / 2)]);
  return arr.sort()[parseInt(arr.length / 2)];
}

findMedian([0, 1, 2, 3, 4, 5, 6, 8, -1]);
