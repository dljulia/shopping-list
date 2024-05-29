/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const sendInput = document.querySelector('#input');
const taskContainer = document.querySelector('.items');

function createTask() {
  const taskText = sendInput.value;

  const newTask = document.createElement('div');
  newTask.classList.add('task');
  newTask.textContent = taskText;

  if (taskText != '') {
    taskContainer.prepend(newTask);
  }

  sendInput.value = '';  

  newTask.addEventListener('click', function() {
    newTask.classList.toggle('done')
  });
}

sendInput.addEventListener('keydown', function(event) {
  if (event.key == 'Enter') {
    createTask();
  }
}); 


