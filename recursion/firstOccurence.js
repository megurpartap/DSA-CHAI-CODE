const firstOccurenceRecursive = (arr, key, currentIndex) => {
  // base class
  if (currentIndex === arr.length) {
    return -1;
  }

  if (arr[currentIndex] === key) {
    return currentIndex;
  }

  subProblemAnswer = firstOccurenceRecursive(arr, key, currentIndex + 1);
  return subProblemAnswer;
};

console.log(firstOccurenceRecursive([1, 2, 3, 1, 4, 5, 3], 2, 0));
