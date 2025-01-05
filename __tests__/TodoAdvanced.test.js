const TodoAdvanced = require('../path/to/TodoAdvanced'); // Adjust the path as necessary

test('cancel button functionality', () => {
    document.body.innerHTML = `
        <div class="containerDiv"></div>
        <input class="inputTask" type="text" />
        <button class="buttonAdd">Add Task</button>
        <div class="resultTask"></div>
    `;

    const todo = new TodoAdvanced();
    const inputTask = document.querySelector('.inputTask');
    const buttonAdd = document.querySelector('.buttonAdd');

    // Simulate adding a task
    inputTask.value = 'Test Task';
    buttonAdd.click();

    // Check if the task is rendered
    expect(document.querySelector('.Task').textContent).toBe('Test Task');

    // Simulate clicking the cancel button
    const cancelButton = document.querySelector('.cancelEdit');
    cancelButton.click();

    // Verify that the task list is rendered correctly afterward
    expect(document.querySelector('.resultTask').innerHTML).toBe('');
});