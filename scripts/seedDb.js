const { Seeder } = require('mongo-seeding');
const path = require('path');

const config = {
  database: 'mongodb://127.0.0.1:27017/ig',
  dropDatabase: true
};

const seeder = new Seeder(config);

const collections = seeder.readCollectionsFromPath(
  path.resolve(__dirname, './data/')
);

(async function() {
  try {
    await seeder.import(collections);
    console.log('Data importada a la base de datos "ig" exitosamente');
  } catch (err) {
    console.log('Hubo un error llenando la base de datos:', err);
  }
})();

// Comandos para exportar modelos de la DB
// mongoexport --db ig --collection usuarios --out usuarios.json
// mongoexport --db ig --collection posts --out posts.json
