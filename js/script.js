(function () {
  const loginForm = document.querySelector('[data-login-form]');
  const listElement = document.querySelector('[data-list]');

  if (loginForm) {
    const formHandler = (event) => {
      event.preventDefault();
      const formData = {};
      const inputs = event.target.querySelectorAll('input, select, textarea');

      inputs.forEach((input) => {
        if (input.type === 'file') {
          formData[input.name] = input.files[0] ? input.files[0].name : '';
        } else if (input.type === 'checkbox') {
          formData[input.name] = input.checked;
        } else {
          formData[input.name] = input.value;
        }
      });

      localStorage.setItem('formData', JSON.stringify(formData));
    };

    loginForm.addEventListener('submit', formHandler);
  }

  const formData = JSON.parse(localStorage.getItem('formData'));
  Object.keys(formData).forEach((key) => {
    const li = document.createElement('li');
    li.textContent = formData[key] ? `${key}: ${formData[key]}` : `${key}: No data found`;
    listElement.appendChild(li);
  });

}());
