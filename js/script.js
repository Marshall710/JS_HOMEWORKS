(function () {
  const generateList = function (array) {
    const ulEl = document.createElement('ul');

    array.forEach((item) => {
      const liEl = document.createElement('li');

      if (Array.isArray(item)) {
        liEl.appendChild(generateList(item));
      } else {
        liEl.textContent = item;
      }

      ulEl.appendChild(liEl);
    });

    return ulEl;
  };

  const array = [1, 2, [1.1, 1.2, 1.3], 3];
  const list = generateList(array);
  document.body.appendChild(list);
}());
