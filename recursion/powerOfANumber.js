const powerOfNumber = (num, pow) => {
  // base case
  if (pow === 0) {
    return 1;
  }

  let subProblem = powerOfNumber(num, pow - 1);
  return num * subProblem;
};

console.log(powerOfNumber(2, 7));
