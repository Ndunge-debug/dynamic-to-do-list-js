// Wait until the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        // Get and trim the task input value
        const taskText = taskInput.value.trim();

        // If the input is empty, alert the user
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item (li) for the task
        const li = document.createElement('li');
        li.textContent = taskText;
        li.classList.add('task-item'); // ✅ Add class to li

        // Create a "Remove" button for the task
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn'); // ✅ Use classList.add

        // When "Remove" is clicked, delete the task from the list
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the "Remove" button to the list item
        li.appendChild(removeBtn);

        // Add the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add task when the "Add Task" button is clicked
    addButton.addEventListener('click', addTask);

    // Allow adding task by pressing the Enter key
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});







