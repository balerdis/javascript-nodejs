console.log("hola mundo");
console.log("hola mundo");
console.log("hola mundo");
console.log("hola mundo");
var contador = 1;
do
{
console.log("hola mundo !");
contador += 1;
} while (contador <= 5)


// ciclo exclusivo para javascript, y solo para iterar dentro de un objetos JAVASCRIPT
// for in 
/*
for (variable operadorIN objeto)
{

}
*/
// for in < --- se usa en temas de debug
var persona = {
    nombre:"sergio",
    apellido:"balerdi",
    edad:41
};

for(let clave in persona)
{
    console.log(clave, persona[clave]);
}

// for of <-- sirve para interar por objectos "iterables", ojo no sirve para 
// iterar dentro de objetos, para eso existe el for in
// los arreglos son iterables, los strings tambien, map y set tambien (son evoluciones de java script desde 2015)
// map es una colecion de objetos donde cada clave puede ser cualquier cosa ja (en un objeto las claves son string siempre aca no)
// set es una coleccion de objectos ordenados y unicos (te saca los repetidos)

var arreglo = [1,2,3,4,5];
var nombre = 'Sergio';
for(let valor of nombre) //<-- variable asume el valor del elemento de nuestra coleccion
{
    console.log(valor);

}