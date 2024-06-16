const sumOfNumber = (num) => {
  // base case
  if (num === 0) {
    return 0;
  }

  let subProblem = sumOfNumber(num - 1);
  return num + subProblem;
};

console.log(sumOfNumber(7));
