import { compareAsc, startOfWeek, endOfWeek, isWithinInterval, parse, parseISO } from "date-fns";

export function app() {
  const taskList = JSON.parse(localStorage.getItem("taskList")) || [];
  class Task {
    constructor(title, description, date, priority, tag) {
      this.id = Math.floor(Math.random() * 1000)
      this.title = title
      this.description = description
      this.dueDate = this.getDueDate(date).toISOString().slice(0, 10)
      this.priority = priority
      this.tag = tag
    }
    getStatus(status) {
      return status ? 'Completed' : 'Not complete'
    }

    getDueDate(date) {
      return new Date(date)
    }
  }

  function updateLocalStorage() {
    localStorage.setItem("taskList", JSON.stringify(taskList))
  }

  function addTaskToList(task) {
    taskList.push(task)
    updateLocalStorage()
  }

  function createNewTask(title, description, date, priority, tag) {
    const task = new Task(title, description, date, priority, tag)

    addTaskToList(task)
  }

  function editTask(index, title, description, date, priority, tag) {
    taskList[index].title = title
    taskList[index].description = description
    taskList[index].dueDate = date
    taskList[index].priority = priority
    taskList[index].tag = tag
  }

  function getIndex(taskId) {
    return taskList.findIndex(e => e.id === taskId)
  }

  function deleteTask(index) {
    taskList.splice(index, 1)
    updateLocalStorage()
  }

  const personalTag = () => {
    return taskList.filter(el => el.tag.toLowerCase() === 'personal')
  }

  const projectTag = () => {
    return taskList.filter(el => el.tag.toLowerCase() === 'project')
  }

  const sortTasksByDueDate = () => {
    return taskList.sort((a, b) => compareAsc(a.dueDate, b.dueDate))
  }

  const getTasksDueToday = () => {
    const today = new Date().toDateString()
    return taskList.filter(task => parseISO(task.dueDate).toDateString() === today)
  }

  const getTasksForNextWeek = () => {
    const today = new Date()
    const startOfNextWeek = startOfWeek(today, { weekStartsOn: 1 }); // Assuming week starts on Monday
    const endOfNextWeek = endOfWeek(today, { weekStartsOn: 1 });

    return taskList.filter(task =>
      isWithinInterval(parse(task.dueDate), { start: startOfNextWeek, end: endOfNextWeek })
    );
  }

  const getTasksForCurrentWeek = () => {
    const today = new Date();
    const startOfCurrentWeek = startOfWeek(today, { weekStartsOn: 1 }); // Assuming week starts on Monday
    const endOfCurrentWeek = endOfWeek(today, { weekStartsOn: 1 });

    return taskList.filter(task =>
      isWithinInterval(parseISO(task.dueDate), { start: startOfCurrentWeek, end: endOfCurrentWeek })
    );
  }

  return {
    taskList,
    personalTag,
    projectTag,
    createNewTask,
    deleteTask,
    editTask,
    sortTasksByDueDate,
    getTasksDueToday,
    getTasksForNextWeek,
    getTasksForCurrentWeek,
    getIndex
  }
}