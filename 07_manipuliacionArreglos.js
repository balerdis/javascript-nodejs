// for
var letras = ["a", "b", "c", "d", "e"];

for (let index = 0; index < letras.length; index++) {
  console.log(letras[index]);
}

// forEach
letras.forEach((elemento) => {
  console.log(elemento);
});

var letras = ["a", "b", "c", "d", "e"];
letras.forEach((elemento) => console.log(elemento));

// push, shift, pop

// push es una funcion "mutable", modifica lo que esta en memoria
letras.push("f");
console.log(letras);

// shift funcion mutable, va a modificar y quitarle la primer letra
var primerElemento = letras.shift();
console.log(primerElemento);
console.log(letras);

// funcion pop funcion mutable, te quita el ultimo elemento del arreglo y te lo devuelve
var ultimoElemento = letras.pop();
console.log(letras);
console.log(ultimoElemento);

// funcion MAP, es inmutable !, modifica el arreglo pero te devuelve una copia
var estudiantes = ["Dayana", "Pamela", "Ada", "Katrina"];

// transformar esto en una array en uno asociativo con objetos, con nombre y asistencia true o false
// map es una forma de recorrer los arreglos, map te da la posibilidad que vos digas como se modifica cada
// elemento del arreglo, y al final te transformo el arreglo y te lo devuelve modificado pero en una copia
var asistencia = estudiantes.map((elemento) => {
  return { nombre: elemento, asistencia: false };
});

console.log(estudiantes);
console.log(asistencia);

var estudiantes = ["Dayana", "Pamela", "Ada", "Katrina"];

var asistencia = estudiantes.map((elemento) => `${elemento}.`);
console.log(estudiantes);
console.log(asistencia);

// mas de map
var productos = [
  { nombre: "camisetas", precio: 15 },
  { nombre: "zapatillas", precio: 20 },
  { nombre: "pantalon", precio: 25 },
];

var productosImpuesto = productos.map(function (elemento) {
  //NOTA: para que map sea inmutable, no se debe tocar el objeto vinculado por parametro, porque va por referencia y modifica el objeto original
  //para evitar tocar el objeto original, SIEMPRE debemos crear un objeto de retorno completamente nuevo
  return {
    //spread operator, expande un objeto dentro de otro
    ...elemento,
    impuesto: 0.12,
  };
});

//tambien se puede usar funciones flecha para hacer mas corta la definicion
var productosImpuesto = productos.map((elemento) => {
  //NOTA: para que map sea inmutable, no se debe tocar el objeto vinculado por parametro, porque va por referencia y modifica el objeto original
  //para evitar tocar el objeto original, SIEMPRE debemos crear un objeto de retorno completamente nuevo
  return {
    //spread operator, expande un objeto dentro de otro
    ...elemento,
    impuesto: 0.12,
  };
});

var precios = productos.map((elemento) => elemento.precio);

console.log(productos);
console.log(productosImpuesto);
console.log(precios);

// filter
// funcion inmutable, filtra elementos de un arreglo en funcion de una funcion que devuelve un valor booleano
var estudiantes = [
  { nombre: "Ada", edad: 20, matriculado: true },
  { nombre: "Katrina", edad: 19, matriculado: true },
  { nombre: "Jorge", edad: 22, matriculado: false },
  { nombre: "Gabriel", edad: 21, matriculado: true },
  { nombre: "Raul", edad: 19, matriculado: true },
];

//estudiantes mayores o iguales a 21
// var filtrado = estudiantes.filter((estudiante)=> estudiante.edad >= 21);
var filtrado = estudiantes.filter(
  (estudiante) => estudiante.edad >= 21 && estudiante.matriculado
);
console.log(filtrado);

// reduce <-- es inmutable
// reduce todo un arreglo a un solo valor
var calificaciones = [3, 5, 9, 10, 10]; // <- obtener el promedio de las notas
let estadoInicialAcumulador = 0;
//reduce inyecta en la funcion del primer parametro, acumulador que es 0 y el elemento que itera del arreglo
var suma = calificaciones.reduce(
  (acumulador, calificacion) => acumulador + calificacion,
  estadoInicialAcumulador
);

console.log(calificaciones);
console.log(suma);
console.log(suma / calificaciones.length);

// para el profe reduce es algo complejo de entender

var edades = [21, 21, 23, 43, 21, 43, 18, 18, 23, 23];
// nos piden la cantidad de personas que existe por cada edad
// la salida que admite reduce es un solo valor, pero un objeto es un solo "valor" :
/* 
 {
     21: 3,
     43: 2,
     ...
 }

*/

var resultado = edades.reduce((acumulador, edad) => {
  if (!acumulador[edad]) {
    acumulador[edad] = 1;
  } else {
    acumulador[edad]++;
  }
  return acumulador;
}, {});

console.log(edades);
console.log(resultado);

var ventas = [
  { nombre: "camiseta", precio: 15, totalVendido: 10 },
  { nombre: "zapatilla", precio: 150, totalVendido: 8 },
  { nombre: "pantalon", precio: 20, totalVendido: 30 },
];

//obtener el total de dinero obtenido por cada producto del local
var resultado = ventas.reduce((acumulador, venta) => {
  acumulador[venta.nombre] = `$ ${venta.precio * venta.totalVendido}`;
  return acumulador;
}, {});

console.log(ventas);
console.log(resultado);

var estudiantes = [
  { nombre: "Ada", edad: 20, matriculado: true },
  { nombre: "Katrina", edad: 19, matriculado: true },
  { nombre: "Jorge", edad: 22, matriculado: false },
  { nombre: "Gabriel", edad: 21, matriculado: true },
  { nombre: "Raul", edad: 19, matriculado: true },
];

// obtener la cantidad de estudiantes matriculados y la cantidad de no matriculados
var resultado = estudiantes.reduce((acumulador, estudiante) => {
  var key = "";
  key = estudiante.matriculado ? "matriculados" : "no matriculados";

  if (!acumulador[key]) acumulador[key] = 1;
  else acumulador[key]++;

  return acumulador;
}, {});

console.log(estudiantes);
console.log(resultado);

//otra forma es :
var estudiantes = [
  { nombre: "Ada", edad: 20, matriculado: true },
  { nombre: "Katrina", edad: 19, matriculado: true },
  { nombre: "Jorge", edad: 22, matriculado: false },
  { nombre: "Gabriel", edad: 21, matriculado: true },
  { nombre: "Raul", edad: 19, matriculado: true },
];

// obtener la cantidad de estudiantes matriculados y la cantidad de no matriculados
var resultado = estudiantes
  .map((estudiante) => estudiante.matriculado)
  .reduce(
    (acumulador, item) => {
      // <-- esto solo funciona si el map devuelve un iterable y efectivamente devuelve un iterable (un array)
      if (item) acumulador.matriculado++;
      else acumulador.noMatriculado++;
      return acumulador;
    },
    { matriculado: 0, noMatriculado: 0 }
  );

console.log(estudiantes);
console.log(resultado);

// funciones some y every
// some, para saber si alguno de los elemento cumple con una condicion especifica
// every si todos cumplen
// var numeros = [1,2,3,4,5,6,7,8,9,10];
var numeros = [1, 3, 5, 7];

var resultado = numeros.some((numero) => numero % 2 == 0);

console.log(resultado);

//Every
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var resultado = numeros.every((numero) => numero % 2 == 0);

console.log(resultado);

// find y findIndex
// find: busca un elemento que cumple con una condicion
// findindex: busca el indice un elemento que cumple con una condicion

// Diferencia entre Find y Filter (find, devuelve el primer elemento que se encuentra, filter un array de los que coincidan con el criterio de busqueda)
var clientes = [
  { id: "1", nombre: "Ada" },
  { id: "2", nombre: "Karina" },
  { id: "3", nombre: "Dayana" },
  { id: "4", nombre: "Pamela" },
  { id: "1", nombre: "Michelle" },
];

var cliente = clientes.find((cliente)=>cliente.id==="1");
var filter = clientes.filter((filter)=>filter.id==="1");

console.log(clientes);
console.log(cliente);
console.log(filter);

//findIndex
var clientes = [
  { id: "1", nombre: "Ada" },
  { id: "2", nombre: "Karina" },
  { id: "3", nombre: "Dayana" },
  { id: "4", nombre: "Pamela" },
  { id: "1", nombre: "Michelle" },
];

var cliente = clientes.findIndex((cliente)=>cliente.id==="1");

console.log(clientes);
console.log(cliente);

//includes
//se fija si un elemento esta o no el array
var mascotas = ['perro', 'gato', 'conejo'];
var resultado = mascotas.includes('gato');
console.log(resultado);
console.log("Sergio".includes('o')); // <-- // tambien sirve para dentro de string

var buscador = (parametro)=>{
  let clientes = [
    { id: "1", nombre: "Ada" },
    { id: "2", nombre: "Karina" },
    { id: "3", nombre: "Dayana" },
    { id: "4", nombre: "Pamela" },
    { id: "1", nombre: "Michelle" },
  ];


  return clientes.filter((cliente)=>cliente.nombre.includes(parametro));
}

console.log(buscador('i'));

// join
// une y genera un string con la union

