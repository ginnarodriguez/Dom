

const btn = document.querySelector('[data-form-btn]');
import checkComplete from "./componentes/checkComplete.js";
import deleteIcon from "./componentes/deleteIcon.js";

const createTask = (evento) => {
  evento.preventDefault();/*para que no cargue ni se borre lo que se ingresa*/
  const input = document.querySelector('[data-form-input]');
  const value = input.value
  const list =document.querySelector("[data-list]")
  const task =document.createElement("li");
  task.classList.add("card");
  input.value = "";


  const taskContent = document.createElement("div")
  
  const titleTask = document.createElement("span");
  titleTask.classList.add("task");
  titleTask.innerText = value;
  taskContent.appendChild(checkComplete());
  taskContent.appendChild(titleTask);
  
  
//task.innerHTML = content;
task.appendChild(taskContent);
task.appendChild(deleteIcon());
list.appendChild(task);
};


//Arrow functions o funciones anonimas
btn.addEventListener('click', createTask);





