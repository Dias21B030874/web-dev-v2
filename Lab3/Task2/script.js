const addButton = document.querySelector('.add_button')
const taskList = document.querySelector('.tasks')
const newTask = document.querySelector('.new_task')

addButton.addEventListener('click', function () {
    const addTask = newTask.value.trim();
    newTask.value = "";
    if (addTask == "")
        return;
    const taskText = document.createElement('span');
    taskText.innerHTML = addTask;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', crossOut);

    const removeTask = document.createElement('img')
    removeTask.className = 'bin-img';
    removeTask.src = 'bin.png';
    removeTask.alt = 'Delete task';
    removeTask.addEventListener('click', deleteItem);

    const item = document.createElement('div');

    item.className = 'task-item'
    item.appendChild(checkbox)
    item.appendChild(taskText);
    item.appendChild(removeTask);

    taskList.appendChild(item);
});

function crossOut() {
    if (this.checked)
        this.parentNode.className = 'task-item done';
    else
        this.parentNode.className = 'task-item undone';
}

function deleteItem() {
    this.parentNode.remove();
}