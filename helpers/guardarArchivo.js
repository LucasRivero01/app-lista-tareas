const fs = require('fs');


const guardarDatos = ( data ) => {
   const archivoSalida = './db/datos.json'
   // convierto el objeto a json.string JSON.stringify(data)
   fs.writeFileSync(archivoSalida, JSON.stringify(data));
}


module.exports = {
   guardarDatos,
}