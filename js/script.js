Function.prototype.customBind = function (context) {
  const fn = this;
  const args = Array.prototype.slice.call(arguments, 1);

  return function () {
    const combinedArgs = args.concat(Array.prototype.slice.call(arguments));

    return fn.apply(context, combinedArgs);
  };
};

// Приклад використання
const obj = {
  name: "John",
};

function greet() {
  console.log(`Hello, ${this.name}`);
}

const boundGreet = greet.customBind(obj);
boundGreet();
