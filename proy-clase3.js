let frutas = ["manzana", "fresa", "mango", "naranja", "manzana", "mango"];
let cantidad_manzanas = 0
let cantidad_mangos = 0
let cantidad_fresas = 0
let cantidad_naranjas = 0

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);

    if (frutas[i] == "manzana") {
        cantidad_manzanas++
    } else if (frutas[i] == "fresa") {
        cantidad_fresas++
    } else if (frutas[i] == "mango") {
        cantidad_mangos++
    } else if (frutas[i] == "naranja") {
        cantidad_naranjas++
    }
}
console.log("hay " +cantidad_manzanas +" manzanas");
console.log("hay " + cantidad_fresas +" fresas");
console.log("hay " +cantidad_mangos+ " mangos");
console.log("hay " +cantidad_naranjas +" naranjas");
