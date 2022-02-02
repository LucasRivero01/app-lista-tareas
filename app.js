const { inquirerMenu, pausa, leerEntrada } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
//const { pausa } = require('./helpers/mensajes');

require('colors');

console.clear()

const main = async() => {
   let opt = '';

   const tareas =  new Tareas();
   // se ejecuta mientras opt sea distinto de 0
   do {
      // espero hasta que la funcion retorne un valor
      opt = await inquirerMenu();
      switch (opt){
         case '1':
             const ingresarDesc = await leerEntrada('Ingresar Descripcion:');
             // llamo a la funcion crearTarea pasando la descripcion
             tareas.crearTarea(ingresarDesc)
         break;
         case '2':
            console.log(tareas._listado);
         break;
      }
      await pausa();
   } while( opt !== '0')
 
}

main();