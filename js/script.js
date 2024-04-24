const sum = () => {
  let number = 0;

  const result = (value) => number += value;

  return result;
};

const sumFunc = sum();

console.log(sumFunc(3));
console.log(sumFunc(5));
console.log(sumFunc(20));
