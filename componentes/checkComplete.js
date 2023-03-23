const checkComplete = () =>{
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask);
    return i;
  }
  
  const completeTask = (event) =>{
    const element = event.target
    element.classList.toggle("fas");/*para marcar el check*/
    element.classList.toggle("completeIcon");/*pone el color*/
    element.classList.toggle("far");/*quitar el check*/
  }

  export default checkComplete