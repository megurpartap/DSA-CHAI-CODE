const balanceP = (str, counter = 0) => {
  if (str.length === 0) {
    if (counter === 0) {
      return true;
    } else {
      return false;
    }
  }

  if (str[0] === ")" && counter === 0) {
    return false;
  }

  if (str[0] === "(") {
    return balanceP(str.substring(1), counter + 1);
  } else if (str[0] === ")") {
    return balanceP(str.substring(1), counter - 1);
  } else {
    return false;
  }
};

console.log(balanceP("()()()"));
console.log(balanceP("(())()"));
console.log(balanceP("())()("));
console.log(balanceP("()(())"));
