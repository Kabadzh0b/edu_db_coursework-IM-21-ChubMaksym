import mysql from 'mysql2/promise';

let connection;
// Ініціалізація бази даних
async function initializeDatabase() {
    // Створення з'єднання з базою даних
  connection = await mysql.createConnection({
    host: 'localhost',
    user: 'Kabadzh0b',
    password: 'Baskervili',
    database: 'mydb'
  });
}

initializeDatabase();

export default {
    permission_has_role: {
        read: async (roleID) => {
            const [rows] = await connection.execute('SELECT * FROM permission_has_role WHERE Permission_id = ?', [roleID]);
            return rows;
        },
        delete: async (permissionID) => {
            await connection.execute('DELETE FROM permission_has_role WHERE Permission_id = ?', [permissionID]);
        }
    },
    permission: {
        // Створення нового дозволу
        create: async (name) => {
            const [result] = await connection.execute('INSERT INTO permission (name) VALUES (?)', [name]);
            return result.insertId;
        },

        // Читання дозволу за id
        read: async (id) => {
            const [rows] = await connection.execute('SELECT * FROM permission WHERE id = ?', [id]);
            return rows[0];
        },
        // Читання всіх дозволів
        readAll: async () => {
            const [rows] = await connection.execute('SELECT * FROM permission');
            return rows;
        },

        // Оновлення дозволу за id
        update: async (id, name) => {
            await connection.execute('UPDATE permission SET name = ? WHERE id = ?', [name, id]);
        },

        // Видалення дозволу за id
        delete: async (id) => {
            await connection.execute('DELETE FROM permission WHERE id = ?', [id]);
        }
    }
};
