(function () {
  Function.prototype.myApply = function (ctx, argsArray) {
    if (!Array.isArray(argsArray)) throw new TypeError('Second argument must be array');
    ctx.binding = this;
    const result = ctx.binding(...argsArray);
    delete ctx.binding;
    return result;
  };

  const user = {
    name: 'Oleksandr',
    age: 28,
  };

  const printUserInfo = function (prefix, suffix) {
    return `${prefix} ${this.name}, Age: ${this.age} ${suffix}`;
  };

  const result = printUserInfo.myApply(user, ['Hello', '!']);
  console.log(result);
})();
