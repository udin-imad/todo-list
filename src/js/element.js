import { app } from "./app";
import { table } from "./index";

export function element() {
  const task = app()
  let taskList = task.taskList;

  function createTask() {
    const title = document.querySelector('#title').value
    const description = document.querySelector('#description').value
    const date = document.querySelector('#date').value
    const priority = document.querySelector('#priority').value
    const tag = document.querySelector('#tag').value

    task.createNewTask(title, description, date, priority, tag)
  }

  function updateDisplay(tag) {
    table.textContent = '';
    if (!tag) addTaskToTable();
    if (tag === 'Personal') personalTag();
    if (tag === 'Project') projectTag();
    if (tag === 'today') getTasksDueToday();
    if (tag === 'week') getTasksForCurrentWeek();
  }

  function addTaskToTable() {
    for (let i = 0; i < taskList.length; i++) {
      const row = table.insertRow(-1);
      row.classList.add('row');

      const checkBoxCell = row.insertCell(0);
      const titleCell = row.insertCell(1);
      const descriptionCell = row.insertCell(2);
      const dateCell = row.insertCell(3);
      const priorityCell = row.insertCell(4);
      const tagCell = row.insertCell(5);
      const deleteCell = row.insertCell(6);

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteCell.appendChild(deleteButton);

      const img = document.createElement('img');
      img.classList.add('icon');
      img.setAttribute('src', './icon/trash.svg');
      deleteButton.appendChild(img);

      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBoxCell.appendChild(checkBox);

      titleCell.textContent = taskList[i].title;
      descriptionCell.textContent = taskList[i].description;
      dateCell.textContent = taskList[i].dueDate;
      priorityCell.textContent = taskList[i].priority;
      tagCell.textContent = taskList[i].tag;

      deleteButton.addEventListener('click', () => {
        task.deleteTask(task.getIndex(taskList[i].id))
        updateDisplay()
      })
    }
  }

  function personalTag() {
    const personal = task.personalTag()
    for (let i = 0; i < personal.length; i++) {
      const row = table.insertRow(-1);
      row.classList.add('row');

      const checkBoxCell = row.insertCell(0);
      const titleCell = row.insertCell(1);
      const descriptionCell = row.insertCell(2);
      const dateCell = row.insertCell(3);
      const priorityCell = row.insertCell(4);
      const tagCell = row.insertCell(5);
      const deleteCell = row.insertCell(6);

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteCell.appendChild(deleteButton);

      const img = document.createElement('img');
      img.classList.add('icon');
      img.setAttribute('src', './icon/trash.svg');
      deleteButton.appendChild(img);

      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBoxCell.appendChild(checkBox);

      titleCell.textContent = personal[i].title;
      descriptionCell.textContent = personal[i].description;
      dateCell.textContent = personal[i].dueDate;
      priorityCell.textContent = personal[i].priority;
      tagCell.textContent = personal[i].tag;

      deleteButton.addEventListener('click', () => {
        task.deleteTask(task.getIndex(personal[i].id))
        updateDisplay('Personal')
      })
    }
  }

  function projectTag() {
    const project = task.projectTag()
    for (let i = 0; i < project.length; i++) {
      const row = table.insertRow(-1);
      row.classList.add('row');

      const checkBoxCell = row.insertCell(0);
      const titleCell = row.insertCell(1);
      const descriptionCell = row.insertCell(2);
      const dateCell = row.insertCell(3);
      const priorityCell = row.insertCell(4);
      const tagCell = row.insertCell(5);
      const deleteCell = row.insertCell(6);

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteCell.appendChild(deleteButton);

      const img = document.createElement('img');
      img.classList.add('icon');
      img.setAttribute('src', './icon/trash.svg');
      deleteButton.appendChild(img);

      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBoxCell.appendChild(checkBox);

      titleCell.textContent = project[i].title;
      descriptionCell.textContent = project[i].description;
      dateCell.textContent = project[i].dueDate;
      priorityCell.textContent = project[i].priority;
      tagCell.textContent = project[i].tag;

      deleteButton.addEventListener('click', () => {
        task.deleteTask(task.getIndex(project[i].id))
        updateDisplay('Project')
      })
    }
  }

  function getTasksDueToday() {
    const tasksDueToday = task.getTasksDueToday()
    for (let i = 0; i < tasksDueToday.length; i++) {
      const row = table.insertRow(-1);
      row.classList.add('row');

      const checkBoxCell = row.insertCell(0);
      const titleCell = row.insertCell(1);
      const descriptionCell = row.insertCell(2);
      const dateCell = row.insertCell(3);
      const priorityCell = row.insertCell(4);
      const tagCell = row.insertCell(5);
      const deleteCell = row.insertCell(6);

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteCell.appendChild(deleteButton);

      const img = document.createElement('img');
      img.classList.add('icon');
      img.setAttribute('src', './icon/trash.svg');
      deleteButton.appendChild(img);

      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBoxCell.appendChild(checkBox);

      titleCell.textContent = tasksDueToday[i].title;
      descriptionCell.textContent = tasksDueToday[i].description;
      dateCell.textContent = tasksDueToday[i].dueDate;
      priorityCell.textContent = tasksDueToday[i].priority;
      tagCell.textContent = tasksDueToday[i].tag;

      deleteButton.addEventListener('click', () => {
        task.deleteTask(task.getIndex(tasksDueToday[i].id))
        updateDisplay('today')
      })
    }
  }

  function getTasksForCurrentWeek() {
    const currentWeek = task.getTasksForCurrentWeek()
    for (let i = 0; i < currentWeek.length; i++) {
      const row = table.insertRow(-1);
      row.classList.add('row');

      const checkBoxCell = row.insertCell(0);
      const titleCell = row.insertCell(1);
      const descriptionCell = row.insertCell(2);
      const dateCell = row.insertCell(3);
      const priorityCell = row.insertCell(4);
      const tagCell = row.insertCell(5);
      const deleteCell = row.insertCell(6);

      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteCell.appendChild(deleteButton);

      const img = document.createElement('img');
      img.classList.add('icon');
      img.setAttribute('src', './icon/trash.svg');
      deleteButton.appendChild(img);

      const checkBox = document.createElement('input');
      checkBox.setAttribute('type', 'checkbox');
      checkBoxCell.appendChild(checkBox);

      titleCell.textContent = currentWeek[i].title;
      descriptionCell.textContent = currentWeek[i].description;
      dateCell.textContent = currentWeek[i].dueDate;
      priorityCell.textContent = currentWeek[i].priority;
      tagCell.textContent = currentWeek[i].tag;

      deleteButton.addEventListener('click', () => {
        task.deleteTask(task.getIndex(currentWeek[i].id))
        updateDisplay('week')
      })
    }
  }

  return {
    taskList,
    createTask,
    addTaskToTable,
    updateDisplay,
    getTasksDueToday,
    getTasksForCurrentWeek
  }
}