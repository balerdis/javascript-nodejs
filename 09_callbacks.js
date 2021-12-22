//callbacks: esta era la primera forma que javascripts nos proponia hacer para ejecutar una funcion luego de que una funcion que tardaba ejecutar y no sabias cuando terminaba, la forma era con callbacks
const suma = (a,b) => {
    return a+b
}

console.log(suma(1,2))

const suma = (a,b, cb) => { // <-- en gral nadie escriba callback, en vez de eso escriben cb abreviatura
    cb(a+b)
}

suma(1,2, (resultado)=>{ 
    console.log(resultado)
})


const suma = (a,b, cb) => cb(a+b)
const imprimir = data => console.log(data) // <-- mas compacto que lo de mas arriba
suma(1,2, imprimir)


// ********
const getData = (cb)=>{
    setTimeout(()=>{
        cb({
            nombre: 'Geovanny',
            apellido: 'Arguello'
        })
    }, 3000);
}


const imprimirData = (data) => {console.log(data)}

getData(imprimirData);


// ******* simulemos un error en la llamada que tarbada y como hacemos para trabajar ese error (en el momento en que solo habia callbacks ?)
const getData = (cb, cbError)=>{
    if(false) {
        setTimeout(()=>{
            cb({
                nombre: 'Geovanny',
                apellido: 'Arguello'
            })
        }, 3000);
    }
    else {
        cbError(new Error('No se pudo obtener los datos'))
    }
}


const imprimirData = (data) => {console.log(data)}
const errorHandler = (error) => {console.log(error)}

getData(imprimirData,errorHandler);