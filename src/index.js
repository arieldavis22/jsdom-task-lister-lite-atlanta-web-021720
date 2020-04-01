document.addEventListener("DOMContentLoaded", () => {
  // your code here
  formInput();
});

function formInput() {
  const input = document.querySelector('#new-task-description');
  const form = document.querySelector('#create-task-form');
  const task = document.querySelector('#tasks');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    makeTaskAndButton(input, task);

    e.target.reset();
  })
}

function makeTaskAndButton(input, task) {
  const newLi = document.createElement('li');
  const newBtn = document.createElement('button');

  newBtn.innerText = 'delete'
  newLi.innerText = input.value;

  newLi.appendChild(newBtn);
  task.appendChild(newLi);

  newBtn.addEventListener('click', deleteHandler)
}

function deleteHandler(e) {
  e.target.parentElement.remove();
}