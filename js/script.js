(function () {
  const FORM_ITEMS = 'form-items';
  const form = document.querySelector('#todoForm');
  const taskContainer = document.getElementById('taskContainer');
  let currentId = 1;

  const getData = () => {
    const data = JSON.parse(localStorage.getItem(FORM_ITEMS));
    return data || [];
  };

  const saveItem = (data) => {
    const dataToSave = structuredClone(data);
    const savedData = getData();
    dataToSave.id = currentId;
    currentId++;

    savedData.push(dataToSave);
    localStorage.setItem(FORM_ITEMS, JSON.stringify(savedData));
  };

  const createTaskItem = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const data = {
      title: null,
      description: null,
    };

    const inputs = event.target.querySelectorAll('input, textarea');
    inputs.forEach((input) => {
      data[input.name] = input.value;
    });

    saveItem(data);

    event.target.reset();
  };

  const createItemLayout = (data) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'col-4';
    wrapper.setAttribute('data-id', data.id);

    wrapper.innerHTML = `<div class="taskWrapper">
                            <div class="taskHeading">#${data.id} | ${data.title}</div>
                            <div class="taskDescription">${data.description}</div>
                            <hr>
                            <button class="btn btn-danger btn-sm" data-remove-btn>Favorites</button>
                            <button class="btn btn-danger btn-sm" data-remove-btn>Remove from Favorites</button>
                        </div>`;
    return wrapper;
  };

  const loadTaskContainer = () => {
    const todoItem = getData();

    todoItem.forEach((item) => {
      const layout = createItemLayout(item);
      taskContainer.prepend(layout);
    });
  };

  document.addEventListener('DOMContentLoaded', loadTaskContainer);
  form.addEventListener('submit', createTaskItem);
}());
