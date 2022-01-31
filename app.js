const { inquirerMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
//const { pausa } = require('./helpers/mensajes');

require('colors');

console.clear()

const main = async() => {
   let opt = '';
   // se ejecuta mientras opt sea distinto de 0
   do {
      // espero hasta que la funcion retorne un valor
      // opt = await inquirerMenu();
      const tareas = new Tareas();
      const tarea = new Tarea('Comprar comida');

      tareas._listado[tarea.id] = tarea
      console.log(tareas);
      await pausa();
   } while( opt !== '0')
   
   
}

main();