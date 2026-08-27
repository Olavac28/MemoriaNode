import fastify from 'fastify';

const server = fastify();

server.get('/', () => {
    return 'Olá';
})

server.get('/aba1', () => {
    return 'Olá1';
})

server.get('/aba2', () => {
    return 'Olá2';
})

server.listen({
    port: 3333
})