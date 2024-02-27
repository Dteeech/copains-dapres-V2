import mysql from "mysql";

// Création d'un groupe de connexions pour la base de données MySQL
export const pool = mysql.createPool({
    connectionLimit: 10000,
    host: "localhost",
    user: "root",
    password: "root",
    database: "copains-dapres",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
});

// Vérifier la connexion à la base de données
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Erreur de connexion à la base de données:", err.message);
  } else {
    console.log("Connecté à la base de données!");
    connection.release(); // Libérer la connexion après la vérification
  }
});

// permet d'obtenir le resultat des requetes SQL async
export const asyncQuery = async (sql, params = []) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, params, (error, result) => {
      if (error) {
        return reject(error);
      }
      return resolve(result);
    });
  });
};
