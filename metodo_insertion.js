// Función para ordenar un arreglo de libros por su código usando inserción directa
function ordenarCodigo(array) {
    let acumulador = array.length; // Guardamos la cantidad total de libros

    // Recorremos el arreglo desde el segundo elemento
    for (let inicio = 1; inicio < acumulador; inicio++) {
        let guardar = array[inicio]; // Guardamos el libro actual que vamos a insertar
        let contador = inicio - 1;   // Empezamos a comparar desde el elemento anterior

        // Mientras no lleguemos al inicio y el código anterior sea mayor al actual
        while (contador >= 0 && array[contador].codigo > guardar.codigo) {
            array[contador + 1] = array[contador]; // Movemos el libro hacia la derecha
            contador = contador - 1;               // Seguimos comparando hacia la izquierda
        }

        // Insertamos el libro en la posición correcta
        array[contador + 1] = guardar;
    }

    // Retornamos el arreglo ya ordenado
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

// Ordenamos los libros por código
let librosOrdenados = ordenarCodigo(librosDesordenados);

// Mostramos el resultado en consola
console.log("Libros ordenados por código:");
console.log(librosOrdenados);