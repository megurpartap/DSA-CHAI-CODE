const reverseString = (str) => {
  if (str === "") {
    return str;
  }

  const subProblemSolution = reverseString(str.substring(0, str.length - 1));
  return str[str.length - 1] + subProblemSolution;
};

console.log(reverseString(""));
