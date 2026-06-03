function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Veuillez entrer une tâche !");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        ${taskText}
        <button class="delete" onclick="deleteTask(this)">Supprimer</button>
    `;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}