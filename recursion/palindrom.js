const palindromRecursion = (str) => {
  if (str.length <= 1) {
    return true;
  }

  const subProblem = palindromRecursion(str.substring(1, str.length - 1));
  if (str[0] === str[str.length - 1]) {
    return subProblem;
  } else {
    return false;
  }
};

console.log(palindromRecursion("ccaacc"));
console.log(palindromRecursion("aba"));
console.log(palindromRecursion("a"));
console.log(palindromRecursion("aabbaab"));
console.log(palindromRecursion("aabaab"));
console.log(palindromRecursion("abababab"));
