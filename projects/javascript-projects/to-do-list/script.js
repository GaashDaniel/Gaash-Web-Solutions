const toDoList = document.querySelector('.to-do-list');
const controlPanel = toDoList.querySelector('.control-panel');
const taskDescriptionInput = toDoList.querySelector('#task-description-input');
const addTask = toDoList.querySelector('.add-task');
const taskFilter = toDoList.querySelector('.task-filter');
const taskList = toDoList.querySelector('.tasks');

function generateTaskId() {
    let currentTaskId = +localStorage.getItem('currentTaskId');
    currentTaskId += 1;
    localStorage.setItem('currentTaskId', currentTaskId);
    return currentTaskId;
};

function constructTask(taskDescription) {
    return {
        id: generateTaskId(),
        get storagekey() {
            return 'task#' + this.id;
        },
        description: taskDescription,
        completed: false,
    };
};

function saveTask(task) {
    const key = task.storagekey;
    const value = JSON.stringify(task);
    localStorage.setItem(key, value);
};

function deleteTask(task) {
    localStorage.removeItem(task.storagekey);
};

function createTaskRow(task) {
    const taskRow = document.createElement('div');
    taskRow.classList.add('task-row');
    taskRow.classList.toggle('completed', task.completed)
    const completedToggleLabel = document.createElement('label');
    const completedToggle = document.createElement('input');
    completedToggle.classList.add('completed-toggle');
    completedToggle.type = 'checkbox';
    completedToggle.checked = task.completed;
    completedToggle.onchange = function () {
        task.completed = completedToggle.checked;
        saveTask(task);
        taskRow.classList.toggle('completed', task.completed);
    };
    completedToggleLabel.appendChild(completedToggle);
    taskRow.appendChild(completedToggleLabel);
    const taskDescription = document.createElement('p');
    taskDescription.classList.add('task-description');
    taskDescription.innerText = task.description;
    taskRow.appendChild(taskDescription);
    const editTaskBtn = document.createElement('button');
    editTaskBtn.classList.add('edit-task');
    editTaskBtn.onclick = function () {
        const isEdit = !(taskDescription.contentEditable === 'true');
        editIcon.classList.toggle('fa-pen-to-square', !isEdit);
        editIcon.classList.toggle('fa-floppy-disk', isEdit);
        taskDescription.contentEditable = isEdit;
        if (isEdit) return taskDescription.focus();
        task.description = taskDescription.innerText;
        saveTask(task);
    };
    const editIcon = document.createElement('i')
    editIcon.classList.add('fa-regular', 'fa-pen-to-square');
    editTaskBtn.appendChild(editIcon);
    taskRow.appendChild(editTaskBtn);
    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.classList.add('delete-task');
    deleteTaskBtn.onclick = function () {
        const userConfirmation = confirm('Are you sure you want to delete this task?');
        if (!userConfirmation) return;
        deleteTask(task);
        taskRow.remove();
    };
    const deleteIcon = document.createElement('i')
    deleteIcon.classList.add('fa-regular', 'fa-trash-can');
    deleteTaskBtn.appendChild(deleteIcon);
    taskRow.appendChild(deleteTaskBtn);
    return taskRow;
};

controlPanel.onsubmit = function (event) {
    event.preventDefault();
    const taskDescription = taskDescriptionInput.value;
    if (!taskDescription) return;
    const task = constructTask(taskDescription);
    saveTask(task);
    taskList.prepend(createTaskRow(task));
    taskDescriptionInput.value = '';
};

taskFilter.onchange = function () {
    toDoList.dataset.filter = taskFilter.value;
};

function loadAllTasks() {
    const tasks = [];
    for (const key in { ...localStorage }) {
        if (!key.startsWith('task#')) continue;
        const task = JSON.parse(localStorage.getItem(key));
        tasks.push(task);
    }
    tasks.sort((task1, task2) => task2.id - task1.id);
    return tasks
};

void function main() {
    const tasks = loadAllTasks()
    taskList.append(...tasks.map(createTaskRow));
}();