import { element } from "./element.js";
import '../css/styles.css';

export const table = document.querySelector('table');

const task = element();

const modal = document.querySelector('.modal');
const taskButton = document.querySelector('#task-button');
const submitButton = document.querySelector('form>button');
const personalButton = document.querySelector('#personal-button');
const headTitle = document.querySelector('#content>p');
const homeButton = document.querySelector('#home-button');
const projectButton = document.querySelector('#project-button');
const todayButton = document.querySelector('#today-button');
const weekButton = document.querySelector('#week-button');

taskButton.addEventListener('click', () => modal.showModal());
submitButton.addEventListener('click', taskHandling);
personalButton.addEventListener('click', filterToPersonal);
homeButton.addEventListener('click', home);
projectButton.addEventListener('click', filterToProject);
todayButton.addEventListener('click', filterToToday);
weekButton.addEventListener('click', filterToWeek);

function taskHandling(event) {
  event.preventDefault();
  task.createTask();
  task.updateDisplay();
  console.log(task.taskList);
  modal.close();
}

function filterToPersonal() {
  headTitle.textContent = 'Personal Task';
  task.updateDisplay('Personal');
}

function filterToProject() {
  headTitle.textContent = 'Project Task';
  task.updateDisplay('Project');
}

function filterToToday() {
  headTitle.textContent = 'Today Task';
  task.updateDisplay('today');
}

function filterToWeek() {
  headTitle.textContent = 'Week Task';
  task.updateDisplay('week');
}

function home() {
  headTitle.textContent = 'All Task';
  task.updateDisplay();
}

task.updateDisplay();