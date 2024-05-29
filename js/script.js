(function () {
  const buttons = document.querySelectorAll('[data-action]');

  const saveButtonState = (button) => {
    localStorage.setItem(button.id, button.disabled ? 'disabled' : 'enabled');
  };

  const loadButtonStates = () => {
    for (const button of buttons) {
      const state = localStorage.getItem(button.id);
      if (state === 'disabled') {
        button.style.display = 'none';
      } else {
        button.style.display = 'block';
      }
    }
  };

  const btnHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const clickedButton = event.target.closest('button[data-action]');
    if (clickedButton) {
      clickedButton.disabled = !clickedButton.disabled;
      saveButtonState(clickedButton);
    }
  };

  document.addEventListener('DOMContentLoaded', loadButtonStates);

  for (const button of buttons) {
    button.addEventListener('click', btnHandler);
  }
}());
