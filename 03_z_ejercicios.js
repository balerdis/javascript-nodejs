//1. Escribir un programa que calcule el número de segundos que existen en un día.
var segundosMinuto = 60;
var minutosEnHora = 60;
var cantidadHorasDia = 24;

console.log(segundosMinuto * minutosEnHora * cantidadHorasDia);

//2. Realiza un programa que a partir de los valores ancho=2 y alto=5,
//calcule el área de un rectángulo.

var ancho = 2;
var alto = 5;

var formulaAreaTriangulo = ancho * alto /2;

console.log(formulaAreaTriangulo);

// Hacer un conversor de grados centígrados a grados Fahrenheit.
function convertirCentigradosFahrenheit(x)
{
    return (x * 9/5) +32;
}

console.log(convertirCentigradosFahrenheit(20));
