import { fastify } from fastify;

const server = fastify();

server.post('/usuarios', (require, reply) => {
    
})

server.listen({
    port: 3333
})