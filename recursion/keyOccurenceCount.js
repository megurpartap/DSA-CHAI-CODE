const keyOccur = (key, arr) => {
  // base case
  if (arr.length === 0) {
    return 0;
  }

  const subProblem = keyOccur(key, arr.slice(1));
  if (arr[0] == key) {
    return 1 + subProblem;
  } else {
    return subProblem;
  }
};

console.log(keyOccur(5, [2, 3, 4, 2, 3, 2, 1]));
