let todo_form = document.getElementById("todo-form");
let todo_container = document.getElementById("todo-container");


todo_form.addEventListener("submit", (e) => {
    e.preventDefault();

    todo_container.innerHTML += `
    <div class="todo-element">
         ${e.target.todo.value}
          <button class="todo-delete">Eliminar</button>
    </div>
    `
    
    console.log("tare agregada");
})

let todos = document.getElementsByClassName("todo-element");
todo_elements.addEventListener("click", (e) => {
    console.log(e.target)
})