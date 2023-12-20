import mysql from 'mysql2/promise';

let connection;

async function initializeDatabase() {
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'Kabadzh0b',
    password: 'Baskervili',
    database: 'mydb'
  });
}

initializeDatabase();

export default {
    permission: {
        create: async (name) => {
            const [result] = await connection.execute('INSERT INTO permission (name) VALUES (?)', [name]);
            return result.insertId;
        },

        read: async (id) => {
            const [rows] = await connection.execute('SELECT * FROM permission WHERE id = ?', [id]);
            return rows[0];
        },
        
        readAll: async () => {
            const [rows] = await connection.execute('SELECT * FROM permission');
            return rows;
        },

        update: async (id, name) => {
            await connection.execute('UPDATE permission SET name = ? WHERE id = ?', [name, id]);
        },

        delete: async (id) => {
            await connection.execute('DELETE FROM permission WHERE id = ?', [id]);
        }
    }
};
