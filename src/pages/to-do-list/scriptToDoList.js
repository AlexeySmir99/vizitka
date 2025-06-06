document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-boton');
    const todoList = document.getElementById('todo-list');
    
   
    loadTasks();

    
    addBtn.addEventListener('click', addTask);
    todoInput.addEventListener('keypress', function(e) 
    {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function creatingAnElement(taskText, checked)
    {
        const li = document.createElement('li');
        li.className = 'todo-item';
    
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.checked = checked;
        checkbox.addEventListener('change', toggleTask);
    
        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = taskText;
    
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Удалить';
        deleteBtn.addEventListener('click', deleteTask);
    
        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
    
        todoList.appendChild(li); 
    }
    
    function addTask() 
    {
        const taskText = todoInput.value.trim();
        if (taskText === '') return;

       
        creatingAnElement(taskText, false);
    
        todoInput.value = '';
       
        saveTasks();
    }
    
    function toggleTask(e) {
        const taskText = e.target.nextElementSibling;
        taskText.classList.toggle('completed');
        saveTasks();
    }
    
    function deleteTask(e) {
        e.target.parentElement.remove();
            saveTasks();
    }
    
    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('.todo-item').forEach(task => {
            tasks.push({
                text: task.querySelector('.todo-text').textContent,
                completed: task.querySelector('.checkbox').checked
            });
        });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    }
    
    function loadTasks() {
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
        const tasks = JSON.parse(savedTasks);

            tasks.forEach(task => {
                creatingAnElement(task.text, task.completed);
            });
        }
    }
});
    