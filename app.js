// Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task');

// Call function to load all event listeners
loadEventListeners();


// Load all event listeners function:
function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event 
    taskList.addEventListener('click', removeTask);
    // Clear task event
    clearBtn.addEventListener('click', clearTasks);
    //Filter task event
    filter.addEventListener('input', filterTasks);
}

// Add Task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Add a task')
    }
    // Create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item'
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value))
    // Create new link element
    const link = document.createElement('a')
    // Add class
    link.className = 'delete-item secondary-content'
    // Add icon html
    link.innerHTML = '<i class = "fas fa-check"></i>'
    //Append the link to the li
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li)

    //Clear input
    taskInput.value = '';

    // console.log(li);


    e.preventDefault();
}


// Remove task function
function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        console.log(e.target);
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// Clear Tasks function
function clearTasks() {
    // taskList.innerHTML = ''

    // Faster
    while (taskList.firstChild) {
        console.log(taskList.firstChild);
        taskList.removeChild(taskList.firstChild);
    }
}

// Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    // console.log(text);
    document.querySelectorAll('.collection-item').forEach(function (task) {
        const item = task.firstChild.textContent;
        console.log(item);

        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}