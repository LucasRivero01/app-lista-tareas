const { guardarDatos, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerEntrada } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
//const { pausa } = require('./helpers/mensajes');

require('colors');

console.clear()

const main = async() => {
   let opt = '';

   const tareas =  new Tareas();

   const tareasLeidas = leerDB();
   if (tareasLeidas){
      // establecer las tareas
   }
   
   // es para evitar que se limpie la pantalla y no se vean las tareas
   await pausa();
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
            console.log(tareas.listadoArr);
         break;
      }
      guardarDatos(tareas.listadoArr);
      await pausa();
   } while( opt !== '0')
 
}

main();