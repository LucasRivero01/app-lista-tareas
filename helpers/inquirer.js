const inquirer = require('inquirer');
require('colors');

const menu = [
   {
      type: 'list',
      name: 'opt',
      message: '¿Que va a hacer?',
      choices: [
         {
            value: '1',
            name: '1. Crear tarea'
         },
         {
            value: '2',
            name: '2. Listar tarea'
         },
         {
            value: '3',
            name: '3. Listar tareas completadas'
         },
         {
            value: '4',
            name: '4. Listar tareas pendientes'
         },
         {
            value: '5',
            name: '5. Completar tarea(s)'
         },
         {
            value: '6',
            name: '6. Borrar tarea'
         },
         {
            value: '0',
            name: '0. Salir'
         }
      ]
   }
]
// es de type input
const menuPausa = [
   {
      type: 'input',
      name: 'opt2',
      message: 'Presione Enter para continuar'
   }
]

const inquirerMenu = async() => {
   console.clear();
   console.log('============================'.green);
   console.log('   Seleccione una opcion    '.green);
   console.log('============================\n'.green);
   // se desestructura la opcion porque vuelve un objeto
   const {opt} = await inquirer.prompt(menu);
   // retorno esto name: 'opt',
   return opt;
}

const pausa = async() => {
   const {opt2} = await inquirer.prompt(menuPausa);
   // retorno esto name: 'opt2',
   return opt2;
}

module.exports = {
   inquirerMenu,
   pausa,
}