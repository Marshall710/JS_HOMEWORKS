(function () {
  const sum = (param) => {
    let number = param;

    const result = (value) => (number += value);

    return result;
  };

  const sumFunc = sum(0);

  console.log(sumFunc(3));
  console.log(sumFunc(5));
  console.log(sumFunc(20));
}());
