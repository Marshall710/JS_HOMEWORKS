// Task 1
const getFactorial = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * getFactorial(n - 1);
};

console.log(getFactorial(3));

// Task 2
const pow = (num, degree) => {
  if (degree === 1) {
    return num;
  }
  return num * pow(num, degree - 1);
};

console.log(pow(10, 10));

// Task 3
const sum = (a, b) => {
  if (b === 0) {
    return a;
  }
  return sum(++a, --b);
};
console.log(sum(3, 10));
