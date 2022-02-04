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

const leerEntrada = async(mensaje) => {
   // desestructuro el objeto y obtengo la descripcion
   const pregunta = [
      {
         type: 'input',
         name: 'desc',
         message: mensaje,
         validate(value){
            if (value.length === 0){
               return 'Por favor ingrese un valor';
            }
            return true;
         }
      }
   ];

   const {desc} = await inquirer.prompt(pregunta);
   return desc;
}

// recibo las tareas como un arreglo
const listadoTareasBorrar = async (tareas = []) => {
   
   const choices = tareas.map((tarea, i) => {
      const indice = `${i + 1}`.green;
      return {
         value: tarea.id,
         name: `${indice} ${tarea.desc}`
      }
   });
   // se agrega al principio del arreglo
   choices.unshift({
      value: '0',
      name: '0.'.green + 'Cancelar'
   });
   
   const preguntas = [
      {
         type: 'list',
         name: 'id',
         message: 'Borrar',
         choices
      }
   ]

   const {id} = await inquirer.prompt(preguntas);

   return id
}

const mostrarListadoCheckList = async (tareas = []) => {
   
   const choices = tareas.map((tarea, i) => {
      const indice = `${i + 1}`.green;
      return {
         value: tarea.id,
         name: `${indice} ${tarea.desc}`,
         checked: (tarea.completadoEn) ? true : false
      }
   });
   
   const preguntas = [
      {
         type: 'checkbox',
         name: 'ids',
         message: 'Seleccione',
         choices
      }
   ]

   const {ids} = await inquirer.prompt(preguntas);

   return ids;
}

const confirmar = async (message) => {
   const pregunta = [
      {
         type: 'confirm',
         name: 'ok',
         message
      }
   ]
   const {ok} = await inquirer.prompt(pregunta);
   return ok;
}

module.exports = {
   inquirerMenu,
   pausa,
   leerEntrada,
   listadoTareasBorrar,
   confirmar,
   mostrarListadoCheckList
}