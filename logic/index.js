function twoSums(array, target) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let sum = array[i] + array[j + 1];
      if (sum == target) {
        output.push(i);
        output.push(j + 1);
        return output;
      }
    }
  }
}

console.log(twoSums([2, 7, 11, 15], 13));
