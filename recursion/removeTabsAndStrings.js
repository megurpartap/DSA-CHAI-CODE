const removeSpacesAndTabs = (str) => {
  if (str.length === 0) {
    return "";
  }

  let subProblem = removeSpacesAndTabs(str.substring(0, str.length - 1));
  return (
    subProblem +
    (str[str.length - 1] === " " || str[str.length - 1] === "\t"
      ? ""
      : str[str.length - 1])
  );
};

console.log(removeSpacesAndTabs("hello My Name  Is King"));
