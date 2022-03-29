const taskForm  = document.querySelector(".task-form"),
      taskInput = document.querySelector(".task-input"),
      removeBtn = document.querySelector(".remove-btn");

function Action() {
    taskForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("ok");
    });
}

export default Action;