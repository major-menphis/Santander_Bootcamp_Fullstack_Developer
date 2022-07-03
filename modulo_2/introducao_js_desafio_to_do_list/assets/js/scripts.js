let task_button = document.getElementById('task-button'); //botao

task_button.addEventListener('click', saveTask);

function saveTask(){
    let task_list = document.getElementById('tasks-list').innerHTML;
    let task_item = document.getElementById('task-item').value;
    task_list += "<li><input type='checkbox' class='check-list'><span>" + task_item + "</span></li>";
    document.getElementById('tasks-list').innerHTML = task_list;
    document.getElementById('task-item').value = null;
}
