(function () {
  const obj = {
    name: 'John',
    age: '96',
  };

  const customCall = function (ctx = this, arg) {
    return arg + ctx;
  };

  console.log(customCall(obj.name, 'name: '));

  const customBind = function (ctx = this, arg) {
    return function () {
      return customCall(ctx, arg);
    };
  };

  const example = customBind(obj.age, ' age ');
  console.log(example());
}());
