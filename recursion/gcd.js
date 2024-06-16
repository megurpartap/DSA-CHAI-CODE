const gcdRecursive = (num1, num2) => {
  if (num1 === num2) {
    return num1;
  }

  return gcdRecursive(Math.min(num1, num2), Math.abs(num1 - num2));
};

// console.log(gcdRecursive(27, 2));

const gcdIterative = (num1, num2) => {
  const getFactors = (num) => {
    let arr = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        arr.push(i);
        arr.push(num / i);
      }
    }
    arr.sort((a, b) => a - b);
    return arr;
  };

  const num1Fact = getFactors(num1);
  const num2Fact = getFactors(num2);
  console.log(num1Fact);
  console.log(num2Fact);
};

console.log(gcdIterative(27, 8));
