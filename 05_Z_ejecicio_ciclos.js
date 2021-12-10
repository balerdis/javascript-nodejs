//1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.

console.log(`Bienvenido!, vamos a 
imprimir las tablas desde el 2 al 12:`);
for(let i = 2;i<=12;i++)
{
    console.log(`tabla del ${i}:\n`);
    for(let j = 1;j<=10;j++)
    {
        console.log(`${i}*${j}=`+(i*j));
    }

}

//2.Realice el equivalente con la declaración while y do-while
console.log('Ahora con ciclo while');
console.log(`Bienvenido!, vamos a 
imprimir las tablas desde el 2 al 12:`);

let i = 2;
while(i<=12)
{
    console.log(`tabla del ${i}:\n`);
    j=1;
    while(j<=10)
    {
        console.log(`${i}*${j}=`+(i*j));
        j++;    
    }
    i++;
}

console.log('Ahora con ciclo do-while');
console.log(`Bienvenido!, vamos a 
imprimir las tablas desde el 2 al 12:`);
i = 2;
do
{
    console.log(`tabla del ${i}:\n`);
    j = 1;
    do
    {
        console.log(`${i}*${j}=`+(i*j));
        j++;   
    }
    while(j<=10)
    i++;
}while (i<=12);