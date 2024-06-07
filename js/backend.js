let tasks = [];

//function that creates a new card with the task
function addTask(task) {
    //create the card
    const card = document.createElement('div');
    card.className = 'card';
    card.style.marginTop = '10px';

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    //add the task to the card
    cardBody.textContent = task;

    const buttonDelete = document.createElement('button');
    buttonDelete.className = 'btn btn-outline-danger buttonDelete'; // Asignamos una clase
    buttonDelete.id = 'buttonDelete'; // Asignamos un id
    const logo = document.createElement('i');
    logo.className = 'bi bi-trash';
    buttonDelete.appendChild(logo);

    cardBody.appendChild(buttonDelete);
    card.appendChild(cardBody);

    document.getElementById('list').appendChild(card);

    //Event listener that deletes a task
    buttonDelete.addEventListener('click', () => {
        card.remove();
        //Use the filter method to remove the task from the array
        tasks = tasks.filter((t) => t !== task);
    });
}

//Event listener that adds a task
document.getElementById('buttonAdd').addEventListener('click', () => {
    const task = document.getElementById('inputTask').value;
    tasks.push(task);
    addTask(task);
    document.getElementById('inputTask').value = ''; // Limpia el input
});