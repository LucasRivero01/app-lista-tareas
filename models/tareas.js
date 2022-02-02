const Tarea = require("./tarea");

class Tareas{
   _listado = {}

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