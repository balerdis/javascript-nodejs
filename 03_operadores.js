// operador de desestructuracion

var persona = { nombre: "sergio", apellido: "balerdi"};

var { nombre:xyz, apellido:apel} = persona;


console.log(xyz);
console.log(apel);
console.log(persona);

// operador de desestructuracion de arrays


var arreglo = [1,2,3,4,5];

var [primeraPosicion,dos] = arreglo;
console.log(dos);


// operador de acceso punto
var persona = { nombre: "sergio", apellido: "balerdi"};

console.log(persona.nombre);
console.log(persona.apellido);

// operador de acceso por corchete, se puede usar en objetos y tambien en arreglos
console.log(persona['nombre']);
console.log(persona['apellido']);


// operador de acceso por corchete en arreglos va por posicion
var edades = [21,22,23,24,25];

console.log(edades[0]);


// operador de determinacion de tipo (typeof)
console.log(typeof('iholaa'));
console.log(typeof(21));
console.log(typeof(true));