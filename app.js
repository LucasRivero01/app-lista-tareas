const { guardarDatos, leerDB } = require('./helpers/guardarArchivo');
const { inquirerMenu,
        pausa,
        leerEntrada,
        listadoTareasBorrar,
        confirmar } = require('./helpers/inquirer');
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
      // le paso por parametro las tareas
      tareas.cargarTareasFromArray(tareasLeidas);
   }

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
            tareas.listadoCompleto();
         break;
         case '3':
            
            tareas.listarPendientesCompletadas();
         break
         case '4':
            const completado = false;
            tareas.listarPendientesCompletadas(false);
         break
         case '6':
            const id = await listadoTareasBorrar(tareas.listadoArr);
            if (id !== '0'){
               const ok = await confirmar('¿Está seguro?');
               if (ok){
                  tareas.borrarTarea(id);
                  console.log('Tarea borrada');
               }
            }
         break
      }
      guardarDatos(tareas.listadoArr);
      await pausa();
   } while( opt !== '0')
 
}

main();