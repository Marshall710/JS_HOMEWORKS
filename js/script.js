Function.prototype.myApply = function (context, argsArray) {
  if (typeof context === "undefined" || context === null) {
    context = window;
  }

  const uniqueKey = `___myAplly${Math.floor(Math.random() * 1000000)}`;
  context[uniqueKey] = this;

  const result = context[uniqueKey](...argsArray);

  delete context[uniqueKey];

  return result;
};

const object = function (name) {
  return `Hello ${name}!`;
};

const person = { name: "John" };
const objectName = object.myApply(person, ["Jane"]);
console.log(objectName);
