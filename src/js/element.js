import { app } from "./app";
import { table } from "./index";

export function element() {
  const task = app()
  const taskList = task.taskList

  function createTask() {
    const title = document.querySelector('#title').value
    const description = document.querySelector('#description').value
    const date = document.querySelector('#date').value
    const priority = document.querySelector('#priority').value
    const tag = document.querySelector('#tag').value

    task.createNewTask(title, description, date, priority, tag)
  }

  function refreshTable() {
    table.textContent = ''
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
      dateCell.textContent = taskList[i].dueDate.toISOString().slice(0, 10);
      priorityCell.textContent = taskList[i].priority;
      tagCell.textContent = taskList[i].tag;

      deleteButton.addEventListener('click', () => {
        refreshTable()
        task.deleteTask(i)
        addTaskToTable()
      })
    }
  }

  return { taskList, createTask, addTaskToTable, refreshTable }
}