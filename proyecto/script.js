// Paso 1. Obtener el elemento del botón de agregar del DOM y agregarle un listener
let agregar_button = document.getElementById("agregar_button");

// Paso 2.1 Obtener los valores de los inputs del DOM
let entry_input = document.getElementById("entry_input");
let name_input = document.getElementById("name_input");

// Paso 3.2 Obtener el elemento del contenedor del DOM
let contenedor = document.getElementById("contenedor");

// Paso 6. (extra) Declaramos una variable para guardar las entradas
let entries = { contents: [] };

// Paso 9. (extra) Sacar los entries de localStorage
if (localStorage.getItem("entries")) { // Me aseguro que si exista entries
    // Paso 10. (extra) Pasar el JSON de entries a objeto literal
    let entries_JSON = localStorage.getItem("entries");
    entries = JSON.parse(entries_JSON);

    // Mostrar los comentarios almacenados al cargar la página
    for (let i = 0; i < entries.contents.length; i++) {
        agregar_entry_a_la_interfaz(entries.contents[i]);
    }
}

// Función para agregar un comentario a la interfaz
function agregar_entry_a_la_interfaz(entry) {
    // Paso 4. Crear un elemento div y agregar el contenido del comentario
    let element = document.createElement("div");
    element.classList.add("comentario");

    // Paso 3.3 Usar innerHTML para mostrar el comentario
    let date = new Date(entry.timestamp);
    let formattedDate = date.toLocaleString();
    element.innerHTML = `<p><strong>${entry.name}:</strong> ${entry.text}</p>
                         <small>${formattedDate}</small>`;

    // Paso 5. Crear el botón de eliminar
    let delete_button = document.createElement("button");
    delete_button.innerHTML = "Eliminar";
    delete_button.classList.add("delete-btn");

    // Evento para eliminar comentario con confirmación
    delete_button.addEventListener("click", function () {
        if (confirm("¿Seguro que deseas eliminar este comentario?")) {
            contenedor.removeChild(element);

            // Eliminar comentario del array y actualizar localStorage
            entries.contents = entries.contents.filter(c => c.timestamp !== entry.timestamp);
            let entries_JSON = JSON.stringify(entries);
            localStorage.setItem("entries", entries_JSON);
        }
    });

    element.appendChild(delete_button);
    contenedor.appendChild(element);
}

// Evento de clic para agregar comentario
agregar_button.addEventListener("click", function () {
    console.log("Botón presionado!");

    // Paso 2.2 Obtener los valores de los inputs
    let comentario = entry_input.value.trim();
    let nombre = name_input.value.trim();

    console.log("Comentario:", comentario);
    console.log("Nombre:", nombre);

    // Validar los campos
    if (!comentario || !nombre) {
        alert("Por favor, ingresa tu nombre y un comentario.");
        return;
    }

    // Paso 6. Crear una nueva entrada con los datos de comentario
    let newEntry = { name: nombre, text: comentario, timestamp: Date.now() };

    // Paso 7. Agregar la entrada a la interfaz
    agregar_entry_a_la_interfaz(newEntry);

    // Paso 6. (extra) Agregar la nueva entrada al array de entries
    entries.contents.push(newEntry);

    // Paso 7. Convertir a JSON
    let entries_JSON = JSON.stringify(entries);

    // Paso 8. Guardar en localStorage
    localStorage.setItem("entries", entries_JSON);

    // Limpiar los campos de entrada
    entry_input.value = "";
    name_input.value = "";
});
