const isVowel = (char) => {
  const lowerCaseChar = char.toLowerCase();
  const vowels = "aeiou";

  const isThere = vowels.indexOf(lowerCaseChar);
  if (isThere == -1) {
    return 0;
  } else {
    return 1;
  }
};

const countVowelsRecursively = (str) => {
  if (str.length == 1) {
    return isVowel(str[0]);
  }

  const subProblemCount = countVowelsRecursively(str.slice(0, str.length - 1));
  return subProblemCount + isVowel(str[str.length - 1]);
};

console.log(countVowelsRecursively("hello"));
