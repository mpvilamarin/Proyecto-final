const server = require('./src/app.js');
const { conn } = require('./src/db.js');
require('dotenv').config();
const { PORT } = process.env;

conn.sync({ force: true}).then(() => { 

  server.listen(PORT || 3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
