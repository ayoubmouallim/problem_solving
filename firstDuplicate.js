function firstDuplicate(array) {
  const mySet1 = new Set();

  for (let index = 0; index < array.length; index++) {
    if (mySet1.has(array[index])) {
      return array[index];
    } else {
      mySet1.add(array[index]);
    }
  }

  return -1;
}
