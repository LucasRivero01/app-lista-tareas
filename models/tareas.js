const Tarea = require("./tarea");

class Tareas{
   _listado = {}

   get listadoArr() {
      const listado = [];
      // devuelve un ARREGLO de todas las llaves
      Object.keys(this._listado).forEach(key =>{
         // obtengo la tarea por el key
         const tarea = this._listado[key];
         // inserto la tarea en el listado
         listado.push(tarea);
      })
      // retorno el listado
      return listado;
   }

   constructor(){
      //se inicializa el listado
      this._listado = {};
   }

   crearTarea(desc){
      const tarea = new Tarea(desc);
      this._listado[tarea.id] = tarea;
   }
}

module.exports = Tareas;