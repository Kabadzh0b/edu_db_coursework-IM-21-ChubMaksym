import fastify from "fastify";
import db from "./db.js";

const server = fastify();

server.get('/permission', async (request, reply) => {
    const permissions = await db.permission.readAll();
    reply.send(permissions);
});

server.get('/permission/:id', async (request, reply) => {
    const { id } = request.params;
    const permission = await db.permission.read(id);
    reply.send(permission);
});

server.post('/permission', async (request, reply) => {
    const { name } = request.body;
    const id = await db.permission.create(name);
    reply.send({ id });
});
  
server.put('/permission/:id', async (request, reply) => {
    const { id } = request.params;
    const { name } = request.body;
    await db.permission.update(id, name);
    reply.send({ success: true });
});
  
server.delete('/permission/:id', async (request, reply) => {
    const { id } = request.params;
    await db.permission.delete(id);
    reply.send({ success: true });
});
  
server.listen(3000, (err, address) => {
    if (err) throw err;
    console.log(`Server listening on ${address}`);
});