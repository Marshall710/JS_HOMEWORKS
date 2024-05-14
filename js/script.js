(function () {
  const generateList = function (array) {
    const ul = document.createElement('ul');

    array.forEach((item) => {
      const li = document.createElement('li');

      if (Array.isArray(item)) {
        li.appendChild(generateList(item));
      } else {
        li.textContent = item;
      }

      ul.appendChild(li);
    });

    return ul;
  };

  const array = [1, 2, [1.1, 1.2, 1.3], 3];
  const list = generateList(array);
  document.body.appendChild(list);
}());
