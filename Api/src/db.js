require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const {DB_DEPLOY} = process.env;

const sequelize = new Sequelize(DB_DEPLOY,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    dialectOptions:{
      ssl: true
    } 
  }
);
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Donaciones, Fundaciones, Adopciones, Mascotas, Usuarios, Reviews } =
  sequelize.models;

Reviews.belongsToMany(Fundaciones, {
  through: "ReviewsFundaciones",
  timestamps: false,
});
Fundaciones.belongsToMany(Reviews, {
  through: "ReviewsFundaciones",
  timestamps: false,
});

Fundaciones.hasMany(Adopciones, { foreignKey: "fundacionId" });
Fundaciones.hasMany(Donaciones, { foreignKey: "fundacionId" });
Donaciones.belongsTo(Fundaciones, { foreignKey: "fundacionId" });

Usuarios.hasMany(Donaciones, { foreignKey: "usuarioId" });
Usuarios.hasMany(Adopciones, { foreignKey: "usuarioId" });


// Fundaciones.hasMany(Mascotas, {foreignKey: "fundacionId"})

Mascotas.belongsToMany(Fundaciones, {
  through: "MascotasFundaciones",
  timestamps: false,
});
Fundaciones.belongsToMany(Mascotas, {
  through: "MascotasFundaciones",
  timestamps: false,
});

 Mascotas.belongsToMany(Usuarios, {
  through: "MascotasUsuarios",
  timestamps: false,
}); 
Usuarios.belongsToMany(Mascotas, {
  through: "MascotasUsuarios",
  timestamps: false,
});



Adopciones.belongsTo(Mascotas, { foreignKey: "mascotaId" });
Mascotas.hasMany(Adopciones, { foreignKey: "mascotaId" });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
