const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13],
];

// eslint-disable-next-line func-names
const flat = function (arr) {
  if (arguments.length !== 1) {
    throw new Error(
      'Function accepts only 1 argument, too much arguments provided',
    );
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

  if (arr.some(Array.isArray)) {
    return flatten(arr);
  } else {
    return arr.slice();
  }
};

console.log(flat(complexArray));

try {
  flat(complexArray);
} catch (error) {
  console.error(error.message);
}
