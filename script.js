document.addEventListener("DOMContentLoaded", function () {
  // SELECT ELEMENTS
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // ADD TASK FUNCTION
  function addTask(taskText, saveToStorage = true) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // REMOVE TASK
    removeButton.addEventListener("click", function () {
      taskList.removeChild(listItem);

      // Remove from localStorage
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks = tasks.filter((task) => task !== taskText);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    if (saveToStorage) {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }

  // LOAD TASKS FROM LOCAL STORAGE
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task) => addTask(task, false));
  }

  // HANDLE ADD BUTTON
  addButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    addTask(taskText); // default saveToStorage is true
    taskInput.value = "";
  });

  // HANDLE ENTER KEY
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }

      addTask(taskText);
      taskInput.value = "";
    }
  });

  // INITIAL LOAD
  loadTasks();
});
