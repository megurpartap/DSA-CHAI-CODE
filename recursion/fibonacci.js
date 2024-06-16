const fibonacciRecursive = (n) => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  let subProblem2 = fibonacciRecursive(n - 1);
  let subProblem1 = fibonacciRecursive(n - 2);

  return subProblem1 + subProblem2;
};

console.log(fibonacciRecursive(5));
