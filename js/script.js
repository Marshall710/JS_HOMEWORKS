const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];
const flat = (arr) => {
  if (arguments.length !== 1) {
    throw new Error('Function accepts only 1 argument, too much arguments provided');
  }
  const flatten = (array, flattenArr = []) => {
    for (let i = 0; i < array.length; i++) {
      if (!Array.isArray(array[i])) {
        flattenArr.push(array[i]);
      } else {
        flatten(array[i], flattenArr);
      }
    }
    return flattenArr;
  };

  if
};

console.log(flat(complexArray));
