// Función para buscar la posición correcta de inserción usando búsqueda binaria
function buscarPosicionBinaria(array, guardar, inicio, fin) {
    // Mientras el rango de búsqueda sea válido
    while (inicio <= fin) {
        // Calcular la posición media
        let medio = Math.floor((inicio + fin) / 2);

        // Comparar el código del elemento medio con el código del elemento a insertar
        if (array[medio].codigo === guardar.codigo) {
            // Si son iguales, retornar la posición media
            return medio;
        } else if (array[medio].codigo < guardar.codigo) {
            // Si el código medio es menor, busca en la mitad derecha
            inicio = medio + 1;
        } else {
            // Si el código medio es mayor, busca en la mitad izquierda
            fin = medio - 1;
        }
    }

    // Si no se encuentra una coincidencia exacta, retornar la posición donde debería insertarse
    return inicio;
}
// Función para ordenar el arreglo usando inserción binaria
function ordenarCodigoBinario(array) {
    // Empezar desde el segundo elemento, es decir el índice 1
    for (let i = 1; i < array.length; i++) {
        // Guardar el elemento actual que se va a insertar
        let guardar = array[i];

        // Buscar la posición correcta para insertar el elemento
        let pos = buscarPosicionBinaria(array, guardar, 0, i - 1);

        // Desplazar los elementos hacia la derecha para hacer espacio
        for (let j = i; j > pos; j--) {
            array[j] = array[j - 1];
        }

        // Insertar el elemento en la posición correcta
        array[pos] = guardar;
    }

    // Retornar el arreglo ya ordenado
    return array;
}
// Arreglo de libros desordenados con sus códigos, títulos y años
let librosCasiOrdenados = [ 
{ codigo: "L001", titulo: "Algoritmos I", anio: 2019 }, 
{ codigo: "L002", titulo: "Estructuras de Datos", anio: 2020 }, 
{ codigo: "L003", titulo: "Introducción a la IA", anio: 2023 }, 
{ codigo: "L005", titulo: "Redes de Computadores", anio: 2022 }, 
{ codigo: "L004", titulo: "Bases de Datos", anio: 2018 }, // 
 //fuera de lugar 
{ codigo: "L006", titulo: "Sistemas Operativos", anio: 2017 } 
];
// Ordenar los libros por código usando el método de inserción binaria
let librosOrdenados = ordenarCodigoBinario(librosDesordenados);

// Mostrar el resultado en consola
console.log("Libros ordenados por código (método binario):");
console.log(librosOrdenados);