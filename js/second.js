document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('todo-form');
    let input = document.getElementById('todo-input');
    let list = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let item = document.createElement('li');
        item.textContent = input.value;
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            list.removeChild(item);
        });
        item.appendChild(deleteButton);
        list.appendChild(item);
        input.value = '';
    });
});
