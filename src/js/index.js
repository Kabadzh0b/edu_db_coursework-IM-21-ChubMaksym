import fastify from "fastify";
import db from "./db.js";

const server = fastify();

// Отримання всіх дозволів
server.get('/permission', async (request, reply) => {
    const permissions = await db.permission.readAll();
    reply.send(permissions);
});

// Отримання дозволу за id
server.get('/permission/:id', async (request, reply) => {
    const { id } = request.params;
    try {
      const permission = await db.permission.read(id);
      reply.send(permission);
    } catch (error) {
      reply.code(204).send();
    }
});

// Створення нового дозволу
server.post('/permission', async (request, reply) => {
    const { name } = request.body;
    const id = await db.permission.create(name);
    reply.send({ id });
});

// Отримання ролей, що мають цей дозвіл
server.get('/permission_has_role/:roleID', async (request, reply) => {
    const { roleID } = request.params;
    try {
      const roles = await db.permission_has_role.read(roleID);
      reply.send(roles);
    } catch (error) {
      reply.code(204).send();
    }
  });

// Видалення ролей, що мають цей дозвіл
server.delete('/permission_has_role/:permissionID', async (request, reply) => {
    const { permissionID } = request.params;
    await db.permission_has_role.delete(permissionID);
    reply.send({ success: true });
});
// Оновлення дозволу за id
server.put('/permission/:id', async (request, reply) => {
    const { id } = request.params;
    const { name } = request.body;
    await db.permission.update(id, name);
    reply.send({ success: true });
});
  
// Видалення дозволу за id
server.delete('/permission/:id', async (request, reply) => {
    const { id } = request.params;
    await db.permission.delete(id);
    reply.send({ success: true });
});
  
// Запуск сервера
server.listen(3000, (err, address) => {
    if (err) throw err;
    console.log(`Server listening on ${address}`);
});
