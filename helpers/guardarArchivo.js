const fs = require('fs');

const archivoSalida = './db/datos.json'
const guardarDatos = ( data ) => {
   // convierto el objeto a json.string JSON.stringify(data)
   fs.writeFileSync(archivoSalida, JSON.stringify(data));
}

const leerDB = () => {
   if (!fs.existsSync(archivoSalida)){
      return null;
   }
   const datos = fs.readFileSync(archivoSalida, {encoding: 'utf-8'});
   const resultado = JSON.parse(datos);
   return resultado;
}

module.exports = {
   guardarDatos,
   leerDB,
}