document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const pendingTasksElement = document.getElementById('pending-tasks');
    const completedTasksElement = document.getElementById('completed-tasks');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newTodoText = todoInput.value.trim();
        if (newTodoText !== '') {
            addTodoItem(newTodoText);
            todoInput.value = '';
        }
    });

    function addTodoItem(todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete-btn');
        completeButton.addEventListener('click', function() {
            li.classList.toggle('completed');
            updateTaskCounts();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
            updateTaskCounts();
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        todoList.appendChild(li);
        updateTaskCounts();
    }

    function updateTaskCounts() {
        const tasks = todoList.getElementsByTagName('li');
        let pendingCount = 0;
        let completedCount = 0;

        for (let task of tasks) {
            if (task.classList.contains('completed')) {
                completedCount++;
            } else {
                pendingCount++;
            }
        }

        pendingTasksElement.textContent = `Pending Tasks: ${pendingCount}`;
        completedTasksElement.textContent = `Completed Tasks: ${completedCount}`;
    }
});
