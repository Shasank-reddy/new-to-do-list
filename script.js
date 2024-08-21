document.getElementById('addTaskBtn').addEventListener('click', addTask);
document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');

    li.innerHTML = `
        <div class="checkbox" onclick="toggleComplete(this)"></div>
        <span>${taskText}</span>
        <button class="deleteBtn">delete</button>
    `;

    li.querySelector('.deleteBtn').addEventListener('click', function () {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = '';
}

function toggleComplete(checkbox) {
    checkbox.classList.toggle('checked');
    const li = checkbox.parentElement;
    li.classList.toggle('completed');
}
