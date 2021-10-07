/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  indice = [];
  found = false;
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) indice = [i, j];
    }
  }
  return indice;
};
