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

   cargarTareasFromArray( tareas = []){
      tareas.forEach(tarea => {
         this._listado[tarea.id] = tarea;
      });
   }
   crearTarea(desc){
      const tarea = new Tarea(desc);
      this._listado[tarea.id] = tarea;
   }

   listadoCompleto(){
      this.listadoArr.forEach((tarea, i) => {
         const indice = `${i + 1}`.green;
         const {desc, completadoEn} = tarea;
         const estado = (completadoEn)
            ? 'Completada'.green
            : 'Pendiente'.red
         console.log(`${indice}. ${desc} :: ${estado}`);
      })
   }

   listarPendientesCompletadas(completadas = true){
      let indice = 0
      this.listadoArr.forEach((tarea) => {
         const {desc, completadoEn} = tarea;
         const estado = (completadoEn)
            ? 'Completada'.green
            : 'Pendiente'.red
         if (completadas){
            if (completadoEn){
               indice += 1;
               console.log(`${(indice + '.').green} ${desc} :: ${completadoEn}`);
            }
         }else{
            if (!completadoEn){
               indice += 1;
               console.log(`${(indice + '.').green} ${desc} :: ${estado}`);
            }
         }
      })
   }
}

module.exports = Tareas;