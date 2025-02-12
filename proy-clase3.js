// Creacion del arreglo 
let frutas = ["manzana", "fresa", "mango", "naranja", "manzana", "mango"]
// variables en donde se van a guardar la cantidad de frutas que hay en el arreglo
let cantidad_manzanas = 0
let cantidad_mangos = 0
let cantidad_fresas = 0
let cantidad_naranjas = 0

// el ciclo for nos ayuda a recorrer el arreglo hasta el ultimo elemento del mismo 
for (let i = 0; i < frutas.length; i++) {
    // se imprime cada elemento del arreglo 
    console.log(frutas[i]);
// los if nos ayudan a contar la cantidad de frutas que hay en el arreglo
// compara cada elemento del arreglo con las frutas que queremos contar
    if (frutas[i] == "manzana") {
    // si la fruta es igual a manzana, se suma 1 a la cantidad de manzanas
        cantidad_manzanas++
    } else if (frutas[i] == "fresa") {
        // si la fruta es igual a fresa, se suma 1 a la cantidad de fresas
        cantidad_fresas++
    } else if (frutas[i] == "mango") {
        // si la fruta es igual a mango, se suma 1 a la cantidad de mangos
        cantidad_mangos++
    } else if (frutas[i] == "naranja") {
        // si la fruta es igual a naranja, se suma 1 a la cantidad de naranjas
        cantidad_naranjas++
    }
}
// se imprime la cantidad de frutas que hay en el arreglo
console.log("hay " +cantidad_manzanas +" manzanas")
console.log("hay " + cantidad_fresas +" fresas")
console.log("hay " +cantidad_mangos+ " mangos")
console.log("hay " +cantidad_naranjas +" naranjas")
