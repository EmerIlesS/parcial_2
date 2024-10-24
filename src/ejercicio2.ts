const Array1 : number[] = [1, 2, 3, 4, 5];
const bolean1:boolean[] = [];
console.log(bolean1);

const booleanArray: boolean[] = [true, false, true, false];

console.log(Array1);
Array1.pop();
Array1.indexOf(3);
const subArray = Array1.slice(2, 4);
console.log('numero del numero 2 al 4', subArray);
const elevadoAlCuadrado = Array1.map((num) => num ** 2);
console.log('Numeros elevados al cuadrado', elevadoAlCuadrado);

// filtrar  los numeros pares del arrays de numeros
const numerosPares = Array1.filter((num) => num % 2 === 0);
console.log('Numeros pares', numerosPares);

// suma todos los numeros pares del array2 utilizando reduce
const sumaPares = Array1.reduce((acc, curr) => (curr % 2 === 0 ? acc + curr : acc), 0);
console.log('Suma de los numeros pares', sumaPares);
// divide  uan cadena de texto en un array  de palabras y luego vuelve a unirlas en una cadenas por comas

const frutas: string[] = ['Mazana', 'pera', 'manzana', 'naranja'];
console.log(frutas);
// divide  uan cadena de texto en un array  de palabras

const palabrasArray = frutas.split(' ');
console.log('Palabras en un array:', palabrasArray);
const palabras = frutas.join(', ');
console.log('Palabras en una cadena:', palabras);

const array2: number[] = [10, 20, 30, 40, 50];
//  encuentra el  primer numero  mayor que 25  en el arrays2 y su indice
const numeroMayorQue25 = array2.find((num) => num > 25);
console.log('Primer numero mayor que 25:', numeroMayorQue25);
const indiceArray2 = array2.indexOf(30);
console.log('Indice de 30 en el array2:', indiceArray2);
// verifica si todos los numeros del array2  son positivos
const todosPositivos = array2.every((num) => num > 0);
console.log('Todos los numeros son positivos:', todosPositivos);
// verificar si  algun numero  del arrays2 es mayor que 40
const algunNumeroMayorQue40 = array2.some((num) => num > 40);
console.log('Algun numero es mayor que 40:', algunNumeroMayorQue40);

const aray3:number[] = [1, 2, 3];
const aray4:number[] = [4, 5, 6];

// combinar los arrays3 y array4
const combinarArrays = [...aray3, ...aray4];
console.log('Combinar arrays:', combinarArrays);
const array6:number[] = [5, 1, 4, 2, 3];
// ordenar el array array6 de menor a mayor  y  revertir el orden
const array6Ordenado = array6.sort((a, b) => a - b);
console.log('Array ordenado:', array6Ordenado);
const array7OrdenadoRevertido = array6Ordenado.reverse();
console.log('Array ordenado revertido:', array7OrdenadoRevertido);
// ordenar un arrays de nombres en orden alfabetico
const nombres: string[] = ['Juan', 'Maria', 'Pedro', 'Ana'];
const nombresOrdenados = nombres.sort();
console.log('Nombres ordenados:', nombresOrdenados);

const array7:number[] = [10, 20, 30, 40, 50];
// verifica  si el numero 4 esta presente  en el array7

const numeroEnArray7 = array7.includes(40);
console.log('El numero 40 esta en el array7:', numeroEnArray7);
// verificar si un numero existe en un array
