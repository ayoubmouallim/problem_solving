// complexity n**2
function SumOfTwo(a, b, target) {
  for (let index = 0; index < a.length; index++) {
    for (let j = 0; j < b.length; j++) {
      if (a[index] + b[j] == target) return true;
    }
  }

  return false;
}

// complexity o(n)
function SumOfTwo2(a, b, target) {
  const mySet1 = new Set();

  for (let index = 0; index < a.length; index++) {
    const element = target - a[index];
    mySet1.add(element);
  }
  for (let index = 0; index < b.length; index++) {
    if (mySet1.has(b[i])) return true;
  }
  return false;
}
