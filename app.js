const { mostraMenu, pausa } = require('./helpers/mensajes');

require('colors');

console.clear()

const main = async() => {
   let opt = '';
   // se ejecuta mientras opt sea distinto de 0
   do {
      // espero hasta que la funcion retorne un valor
      opt = await mostraMenu();
      console.log({opt});
      await pausa();
   } while( opt !== '0')
   
   
}


main();