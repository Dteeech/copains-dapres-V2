import express from 'express'
import { pool, asyncQuery } from './config/db.js';


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

// Route pour obtenir tous les utilisateurs
app.get('/user', async (req, res) => {
  try {
    const result = await asyncQuery("SELECT * FROM User");
    res.json({ result });
  } catch (error) {
    console.error("Erreur lors de la requête SQL:", error.message);
    res.status(500).json({ error: "Erreur serveur lors de la requête SQL" });
  }
});

// Démarrage du serveur sur le port 3001
app.listen(PORT, () => {
  console.log(`Le serveur est démarré à http://localhost:${PORT}`);
});
