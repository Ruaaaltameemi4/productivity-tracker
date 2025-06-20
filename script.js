let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  const taskName = document.getElementById("taskInput").value;
  const timeSpent = parseInt(document.getElementById("timeInput").value);

  if (taskName && timeSpent) {
    tasks.push({ name: taskName, time: timeSpent });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
  }
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  let total = 0;

  tasks.forEach((task, index) => {
    const item = document.createElement("li");
    item.textContent = `${task.name} - ${task.time} mins`;
    list.appendChild(item);
    total += task.time;
  });

  document.getElementById("totalTime").textContent = `Total Time: ${total} minutes`;
}

renderTasks();
