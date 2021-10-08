function miniMaxSum(arr) {
  // Write your code here
  let minSum = 0;
  let maxSum = 0;
  let iterationNumber = 0;
  arr.sort().forEach((element, index) => {
    if (iterationNumber === 4) return;
    minSum += element;
    maxSum += arr.sort()[arr.length - index - 1];
    iterationNumber++;
  });

  console.log(minSum, maxSum);
}

miniMaxSum([1, 2, 3, 4, 5]);
