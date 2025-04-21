const todoList = ['kjhg', 'jhgf'];

renderTodoList();

function renderTodoList() {

    let todoListHTML = '';

    for (i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</P>`;
        todoListHTML += html;
    }

    console.log(todoListHTML)
    document.querySelector('.jstd')
        .innerHTML = todoListHTML;

}


function addTodo() {
    const inputElement = document.querySelector(".jsin");
    const name = inputElement.value;

    todoList.push(name);
    console.log(todoList);


    inputElement.value = '';
    renderTodoList();
}


