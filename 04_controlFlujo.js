//1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.

const prompt = require('prompt');

const properties = [
    {
        name: 'diaSemana',
        validator: /^[a-zA-Z\s\-]+$/,
        warning: 'El día de la semana solo tiene letras !'
    },
];

prompt.start();

prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    let traduccion = '';
    console.log('  Dia de la semana ingresado: ' + result.diaSemana);
    switch (result.diaSemana.toUpperCase())
    {
        case 'LUNES':
            traduccion = 'Monday';
            break;
        case 'MARTES':
            traduccion = 'Tusday';
            break;
        case 'MIERCOLES':
            traduccion = 'Wednesday';
            break;
        case 'JUEVES':
            traduccion = 'Thursday';
            break;
        case 'VIERNES':
            traduccion = 'Friday';
            break;
        case 'SABADO':
            traduccion = 'Saturday';
            break;
        case 'DOMINGO':
            traduccion = 'Sunday';
            break;
        default:
            traduccion = 'Ese dia de la semana no lo conosco';
    }
    console.log('  Dia de la semana en ingles: ' + traduccion);
});

function onErr(err) {
    console.log(err);
    return 1;
}
