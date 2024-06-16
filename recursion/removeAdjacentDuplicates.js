const removeAdjDup = (str) => {
  //to replace duplicate with one
  if (str.length === 0) {
    return "";
  }

  const subProblem = removeAdjDup(str.slice(1));
  if (subProblem[0] === str[0]) {
    return subProblem;
  } else {
    return str[0] + subProblem;
  }
};

const deleteAdjDup = (str, arr = []) => {
  let i = 0;
  while (str[i]) {
    if (str[i] === str[i + 1]) {
      i++;
    } else {
      arr.push(str[1]);
      i++;
    }
  }
  if (arr.length !== 0) {
    return deleteAdjDup(arr.join(), []);
  } else {
    return str;
  }
};

console.log(removeAdjDup("aaaaaabbcccaabb"));
console.log(deleteAdjDup("aaab"));
