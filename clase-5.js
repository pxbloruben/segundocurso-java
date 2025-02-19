class Libro { // Se define la clase
    constructor(titulo, autor, año, estado) { // se define el constructor que contiene los atributos de la clase
        this.titulo = titulo; // atributo del titulo
        this.autor = autor; // atributo del autor
        this.año = año; // atributo del año
        this.estado = estado; // atributo del estado del libro (disponible o prestado, etc)
    }

    describirLibro() { // se define el metodo describirLibro
        console.log("Libro titulado \"" + this.titulo + "\", escrito por " + this.autor + " en el año " + this.año + ", el estado es: " + this.estado + "."); // se imprime el resultado
    }
}

// se crea un objeto de tipo libro llamado miLibro y se le asignan los valores de sus atributos usando el constructor de la clase Libro
const miLibro = new Libro("Como agua para chocolate", " Laura Esquivel", 1989, "disponible");
miLibro.describirLibro();
