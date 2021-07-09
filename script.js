const createTodoButton = document.getElementById('criar-tarefa');
const deleteAllButton = document.getElementById('apaga-tudo');
const deleteCompleted = document.getElementById('remover-finalizados');
const todoList = document.getElementById('lista-tarefas');
const inputTodo = document.getElementById('texto-tarefa');

function selectItem(event) {
  if (document.querySelector('.selected') !== null) {
    document.querySelector('.selected').classList.remove('selected');
  }

  event.target.classList.add('selected');
}

function completeTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

createTodoButton.addEventListener('click', () => {
  const item = document.createElement('li');
  item.innerText = inputTodo.value;
  item.className = 'item';
  item.addEventListener('click', selectItem);
  item.addEventListener('dblclick', completeTask);
  todoList.appendChild(item);
  inputTodo.value = '';
});

deleteAllButton.addEventListener('click', () => {
  todoList.innerHTML = '';
});

deleteCompleted.addEventListener('click', () => {
  for (let index = 0; index < todoList.children.length; index += 1) {
    const element = todoList.children[index];
    if (element.classList.contains('completed')) {
      todoList.removeChild(element);
      index -= 1;
    }
  }
});
