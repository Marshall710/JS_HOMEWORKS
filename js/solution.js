(function () {
  const ul = document.getElementById('ulId');

  for (const li of ul.querySelectorAll('li')) {
    console.log(li);
  }
  console.log('Загальна кількість li:', ul.querySelectorAll('li').length);

  const arr = [];
  for (const li of ul.querySelectorAll('li')) {
    arr.push(li.textContent);
  }

  console.log(arr);
}());
