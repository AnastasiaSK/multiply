function multiply(first, second) {
  const firstArray = `${first}`.split("").reverse();
  const secondArray = `${second}`.split("").reverse();
  let resultArray = [];
  let sum = [];
  let maxLength = 0;
  let resultReverse = [];
  let overflow = 0;

  for (let i = 0; i < firstArray.length; i++) {
    if (!resultArray[i]) {
      resultArray[i] = [];
    }
    for (let j = 0; j < secondArray.length; j++) {
      let m = firstArray[i] * secondArray[j];
      resultArray[i][j + i] = m;
      maxLength = j + i;
    }
  }

  for (let row = 0; row < resultArray.length; row++) {
    for (let col = 0; col < maxLength + 1; col++) {
      if (!sum[col]) {
        sum[col] = 0;
      }
      sum[col] += resultArray[row][col] || 0;
    }
  }
  for (let i = 0; i < sum.length; i++) {
    resultReverse[i] = (sum[i] + overflow) % 10;
    overflow = Math.floor((sum[i] + overflow) / 10);
  }
  if (overflow !== 0) {
    resultReverse.push(overflow);
  }

  return resultReverse.reverse().join("");
}

module.exports = multiply;
