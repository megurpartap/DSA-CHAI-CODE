const findLength = (str) => {
  if (str === "") {
    return 0;
  }

  return 1 + findLength(str.substring(1));
};

console.log(findLength("abc abc asd"));
