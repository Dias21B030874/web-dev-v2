const addButton = document.querySelector('.add_button')
const taskList = document.querySelector('.tasks')
const newTask = document.querySelector('.new_task')
const data = document.getElementById('lol')
const datanow = document.getElementById('lol1')

addButton.addEventListener('click', function () {
    const addTask = newTask.value.trim();
    newTask.value = "";
    if (addTask == "")
        return;
    const taskText = document.createElement('span');
    taskText.innerHTML = addTask;
    let somer = data.value;
    let some = document.createElement('div')
    some.innerHTML=somer
    let today = datanow.value;
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', crossOut);

    const removeTask = document.createElement('img')
    removeTask.className = 'bin-img';
    removeTask.src = 'bin.png';
    removeTask.alt = 'Delete task';
    removeTask.addEventListener('click', deleteItem);

    const item = document.createElement('div');

    if(today < somer){
        item.style.color = 'red'
    }

    item.className = 'task-item'
    item.appendChild(checkbox)
    item.appendChild(taskText);
    item.appendChild(some)
    item.appendChild(removeTask);

    taskList.appendChild(item);
});

// function crossOutDeadline(){
//     var today = new Date(now.getDay(), now.getMonth(), now.getFullYear())
//     if(today - 86400000 > somer)
//         this.parentNode.className.toggle("deadline")
     
// }

function crossOut() {

    if (this.checked)
        this.parentNode.className = 'task-item done' ;
    else
         this.parentNode.className = 'task-item undone';
}

function deleteItem() {
    this.parentNode.remove();
}