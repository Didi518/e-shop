const app = require('./app');
const connectDatabase = require('./db/Database');

// handling uncaught exception
process.on('uncaughtException', (err) => {
  console.log(`Erreur: ${err.message}`);
  console.log(`Crash du serveur dû à une erreur filante`);
});

// config
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'api/config/.env',
  });
}

// connect db
connectDatabase();

// create server
const server = app.listen(process.env.PORT, () => {
  console.log(`Serveur connecté sur http://localhost:${process.env.PORT}`);
});

// unhandled promise rejection
process.on('unhandledRejection', (err) => {
  console.log(`Crash du serveur dû à ${err.message}`);
  console.log(`Crash su serveur dû à une promesse rejetée`);
  server.close(() => {
    process.exit(1);
  });
});
