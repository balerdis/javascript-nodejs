// Funciones

// forma declarativa
// function nombreFuncion()
// {
// }

function saludar()
{
    console.log('hola soy Serg');
}

saludar();

function saludar(nombre)
{
    console.log(`Hola soy ${nombre}`);
}

saludar('Sergio'); 


function saludar(nombre)
{
  return ` Hola soy ${nombre}`;

}
var saludo = saludar('Sergio'); 
console.log(saludo);



//Forma expresion o anonimas
// son funciones que se pueden almacenar como un valor en una variable, pero no tienen nombre por eso son anonimas
var suma = function(x,y)
{
    return x+y;
};

console.log(suma(3,3));


// forma flecha, llamadas funciones flecha =>
// estas funciones estan en el grupo de las funciones de expresion, se usan para poder escribir menos (compactar funciones de expresion)
var restar = (x,y) => {
    let resultado = '';
    if(typeof x ==='number' && typeof y === 'number')
    {
        resultado = x-y;
    }
    else 
        resultado = 'Solo se puede restar numeros!';
    return resultado;
}

console.log(restar(10,11));

// las funciones flechas se pueden compactar aun mas, veamos:
// tienen un return implicito, pero para usarlo tenemos que sacar las llaves del cuerpo de la funcion
var multiplicar = (x,y) => x*y;
console.log(multiplicar(3,3));


