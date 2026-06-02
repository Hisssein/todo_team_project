const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const counter = document.getElementById("counter");

function updateCounter() {
    counter.textContent =
        `Nombre de tâches : ${taskList.children.length}`;
}

addBtn.addEventListener("click", () => {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Veuillez entrer une tâche");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    span.addEventListener("click", () => {
        span.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Supprimer";

    deleteBtn.addEventListener("click", () => {
        li.remove();
        updateCounter();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";

    updateCounter();
});

updateCounter();