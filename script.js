// Run the script after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Get and trim the input text
        const taskText = taskInput.value.trim();

        // Alert if input is empty
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        // Create <li> element
        const taskItem = document.createElement('li');

        // Create a text node and append it to <li>
        const taskTextNode = document.createTextNode(taskText);
        taskItem.appendChild(taskTextNode);

        // Create the "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';

        // Add event to remove the task when button is clicked
        removeButton.onclick = () => {
            taskList.removeChild(taskItem);
        };

        // Append the button to the <li> and then the <li> to the list
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);

        // Clear the input field
        taskInput.value = '';
    }

    // Add task when button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when "Enter" key is pressed in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});


