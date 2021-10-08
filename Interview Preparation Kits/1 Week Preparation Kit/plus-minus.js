function plusMinus(arr) {
  // Write your code here
  let positif = 0;
  let negatif = 0;
  let zero = 0;

  arr.forEach((element) => {
    if (element == 0) zero++;
    else if (element > 0) positif++;
    else if (element < 0) negatif++;
  });

  console.log(positif / arr.length);
  console.log(negatif / arr.length);
  console.log(zero / arr.length);
}
