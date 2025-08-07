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
let librosDesordenados = [
  { codigo: "L008", titulo: "Ingeniería de Software", año: 2021 },
  { codigo: "L003", titulo: "Introducción a la IA", año: 2023 },
  { codigo: "L001", titulo: "Algoritmos I", año: 2019 },
  { codigo: "L010", titulo: "Análisis Numérico", año: 2020 },
  { codigo: "L005", titulo: "Redes de Computadores", año: 2022 },
  { codigo: "L004", titulo: "Bases de Datos", año: 2018 }
];

// Ordenar los libros por código usando el método de inserción binaria
let librosOrdenados = ordenarCodigoBinario(librosDesordenados);

// Mostrar el resultado en consola
console.log("Libros ordenados por código:");
console.log(librosOrdenados);
// Buscar el libro con código "L001"
let libroBuscado = { codigo: "L001" };
let posicion = buscarPosicionBinaria(librosOrdenados, libroBuscado, 0, librosOrdenados.length - 1);

// Verificar si realmente se encontró (comparando el código exactamente)
if (librosOrdenados[posicion].codigo === libroBuscado.codigo) {
    console.log(`Libro con código "${libroBuscado.codigo}" encontrado en la posición ${posicion}:`);
    console.log(librosOrdenados[posicion]);
} else {
    console.log(` Libro con código "${libroBuscado.codigo}" no encontrado.`);
}