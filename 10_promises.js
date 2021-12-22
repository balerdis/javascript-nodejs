// promises
// es la evolucion de los callbacks (ya quedaron viejos y dificiles de manejar), ahora te permite ejecutar funciones que tardan mucho y ejecutar algo despues y ejecutar algo si sale algo mal

const getData = () => {
  return new Promise((resolve, reject) => {});
};

const getData = (error) =>
  new Promise((resolve, reject) => {
    // <-- mas compacta que la anterior, y es una funcion, que retorna una promesa que podes usar, le podes pasar parametro
    if (!error) {
        setTimeout(() => {
            resolve({
            nombre: "Sergio",
            apellido: "Balerdi",
            })
        }, 3000);
    } else {
      reject("No hay datos para retornar");
    }
  });

console.log("inicio");
getData(false)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("fin");

// const getData2 = new Promise((resolve, reject)=>{}) // lo vemos como asignacion, que asigna el resultado de la ejecucion de la promesa



//encadenar promesas
const getData = (error) =>
  new Promise((resolve, reject) => {
    // <-- mas compacta que la anterior, y es una funcion, que retorna una promesa que podes usar, le podes pasar parametro
    if (!error) {
        setTimeout(() => {
            resolve({
            nombre: "Sergio",
            apellido: "Balerdi",
            })
        }, 3000);
    } else {
      reject("No hay datos para retornar");
    }
  });

  const getData2 = (error) =>
  new Promise((resolve, reject) => {
    // <-- mas compacta que la anterior, y es una funcion, que retorna una promesa que podes usar, le podes pasar parametro
    if (!error) {
        setTimeout(() => {
            resolve({
            nombre: "Herna",
            apellido: "Balerdi",
            })
        }, 3000);
    } else {
      reject("No hay datos para retornar de data 2");
    }
  });


console.log("inicio");
getData(false)
  .then((data) => {
    console.log(data);
    return getData2(false); // <-- como retornas una promesa
  })
  .then((data)=>{
      console.log(data); // <-- podes encadenar thens

  })
  .catch((error) => {
    console.log(error);
  });
console.log("fin");


// async await
//
//, esta forma vino para resolver varias cosas que pasaban con then y catch
//  con then y catch , te genera muchas lineas de codigo, es dificil de leer cuando encadenas promesas
//  y tambien se complica la forma de encadenar las llamadas encadenadas, entonces
//  surgio el async await


const getData = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
            nombre: "Sergio",
            apellido: "Balerdi",
            })
        }, 3000);
    } else {
      reject("No hay datos para retornar");
    }
  });


// para resolver promesas con esta forma, usamos palabras reservadas, en vez de metodos del propio Promise
// NOTA: para que funcione await , debe existir un async previo
const main = async () => {  // <-- async debe estar siempre ateponiendo a la funcion que va a contener las cosas que vamos hacer con promesas
    let result = await getData(false);
    console.log(result);
}

main()

//encadenar promesas con async await


const getData = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
            nombre: "Sergio",
            apellido: "Balerdi",
            })
        }, 3000);
    } else {
      reject("No hay datos para retornar");
    }
  });
  const getData2 = (error) =>
  new Promise((resolve, reject) => {
    if (!error) {
        setTimeout(() => {
            resolve({
            nombre: "Herna",
            apellido: "Balerdi",
            })
        }, 3000);
    } else {
      reject("No hay datos para retornar de data 2");
    }
  });

const main = async () => {  
    try{
        let result = await getData(false);
        console.log(result);
        let result2 = await getData2(true);
        console.log(result2);
    }
    catch(err){
        console.log(err);

    }
}

main()