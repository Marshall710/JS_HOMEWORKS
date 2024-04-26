(function () {
  const ul = document.getElementById('ulId');
  const bodyChilds = ul.childNodes;
  const arrValue = [];
  const arrName = [];

  for (const li of bodyChilds) {
    if (li instanceof HTMLElement) {
      arrValue.push(li.textContent);
      arrName.push(li.name);
    }
  }

  ul.lastElementChild.textContent = 'Hello, my name is Oleksandr';
  ul.firstElementChild.setAttribute('data-my-name', 'Oleksandr');
  ul.removeAttribute('data-dog-tail');

  console.log(arrValue);
  console.log(arrName);
  console.log(ul);
}());
