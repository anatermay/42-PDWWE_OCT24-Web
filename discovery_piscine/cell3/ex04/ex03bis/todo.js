const $taskList = $('#ft_list');
const $addTaskBtn = $('#add-task-btn');
const $taskPrompt = $('#task-prompt');
const $taskInput = $('#task-input');
const $confirmTaskBtn = $('#confirm-task-btn');
const $cancelTaskBtn = $('#cancel-task-btn');

let tasks = [];

$addTaskBtn.on('click', () => {
    $taskPrompt.removeClass('hidden');
    $taskInput.focus();
});

$confirmTaskBtn.on('click', () => {
    const taskText = $taskInput.val().trim();
    if (taskText) {
        addTask(taskText);
        // saveTasks();
        $taskInput.val("");
        hideTaskPrompt();
    }
});

$cancelTaskBtn.on('click', hideTaskPrompt);

$taskList.on('click', '.task', (event) => {
    const $taskElement = $(event.target);
    const taskId = $taskElement.data('id');
    deleteTask(taskId);
    // saveTasks();
});

function addTask(taskText) {
    const taskId = Date.now();
    const $newTask = $('<div></div>')
        .addClass('task')
        .data('id', taskId)
        .text(taskText);
    document.cookie = 'taskId=taskText';
    $taskList.prepend($newTask);
}

function hideTaskPrompt() {
    $taskPrompt.addClass('hidden');
}

function deleteTask(id) {
    tasks.splice(id, 1);

    const res = document.cookie
        .split('; ')
        .map(x => Object.assign({}, (arr => ({ [arr[0]]: arr[1] }))(x.split('='))));
    console.log('res', res);
}