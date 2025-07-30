document.addEventListener("DOMContentLoaded", function () {
  // SELECT ELEMENTS
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // CREATE ADD TASK FUNCTION
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    // Add event listener to the remove button
    removeButton.addEventListener("click", function () {
      taskList.removeChild(listItem);
    });

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the input field
    taskInput.value = "";
  }

  // ADD EVENT LISTENER TO THE ADD BUTTON
  addButton.addEventListener("click", addTask);

  // ADD EVENT LISTENER TO THE INPUT FIELD FOR ENTER KEY
  taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });
});
