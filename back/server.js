import express from 'express'
import { pool, asyncQuery } from './config/db.js';
import router from './routes/routes.js';

const app = express();
const PORT = 3001;

// Middleware pour gérer les requêtes d'origine croisée
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Middleware pour parser le corps des requêtes en JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", router);
// Route pour obtenir tous les utilisateurs


// Démarrage du serveur sur le port 3001
app.listen(PORT, () => {
  console.log(`Le serveur est démarré à http://localhost:${PORT}`);
});
