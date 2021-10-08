function kangaroo(x1, v1, x2, v2) {
  // Write your code here

  if (
    (x1 >= x2 && v1 > v2) ||
    (x2 >= x1 && v2 > v1) ||
    ((x1 > x2 || x2 > x1) && v2 == v1)
  )
    return "NO";

  let a = (x2 - x1) / (v1 - v2);

  return a <= 0 || a % 1 !== 0 ? "NO" : "YES";
}

console.log(kangaroo(0, 3, 4, 2));
