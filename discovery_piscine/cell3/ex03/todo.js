const taskList = document.getElementById('ft_list');
const addTaskBtn = document.getElementById('add-task-btn');
const taskPrompt = document.getElementById('task-prompt');
const taskInput = document.getElementById('task-input');
const confirmTaskBtn = document.getElementById('confirm-task-btn');
const cancelTaskBtn = document.getElementById('cancel-task-btn');

let tasks = [];

addTaskBtn.addEventListener('click', () => {
    taskPrompt.classList.remove('hidden');
    taskInput.focus();
});

confirmTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        // saveTasks();
		taskInput.value = "";
        hideTaskPrompt();
    }
});

cancelTaskBtn.addEventListener('click', hideTaskPrompt);

taskList.addEventListener('click', (event) => {
    const taskElement = event.target;
    if (taskElement.classList.contains('task')) {
        const taskId = taskElement.dataset.id;
        deleteTask(taskId);
        // saveTasks();
    }
});

function addTask(taskText) {
    const taskId = Date.now();
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.dataset.id = taskId;
    newTask.textContent = taskText;
	document.cookie = 'taskId=taskText';
    taskList.insertBefore(newTask, taskList.firstChild);
};

function hideTaskPrompt() {
    taskPrompt.classList.add('hidden');
}

function deleteTask(id) {
	tasks.splice(id, 1);

	var res = document.cookie
		.split('; ')
		.map(x => Object.assign({}, (arr => ({ [arr[0]] : arr[1] }))(x.split('='))));
		console.log('res', res);
}