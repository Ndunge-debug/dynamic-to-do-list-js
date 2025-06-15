// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Step 1: Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Step 2: Define the function to add a task
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create a new list item (li)
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Remove task when button is clicked
        removeButton.onclick = () => {
            taskList.removeChild(taskItem);
        };

        // Append button to list item and list item to task list
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Step 3: Add event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

