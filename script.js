document.getElementById('toDoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var taskInput = document.getElementById('toDoInput');
    var taskList = document.getElementById('taskList');
    var taskText = taskInput.value.trim();
    if (taskText !== '') {
        var li = document.createElement('li');
        var span = document.createElement('span');
        span.textContent = taskText;
        li.appendChild(span);
        var deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
});

document.getElementById('taskList').addEventListener('click', function(e) {
    if (e.target && e.target.nodeName === 'BUTTON') {
        e.target.parentNode.remove();
    }
});
