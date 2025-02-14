const libros_leidos = [];

function agregarLibro(libro) {
    libros_leidos.push(libro); // Agregar libro a la lista
}

function mostrarLibros() {
    return libros_leidos; // Devolver la lista de libros
}

// Agregar libros
agregarLibro("El señor de los anillos");
agregarLibro("El principito");
agregarLibro("El hobbit");

// Mostrar libros
console.log(mostrarLibros());