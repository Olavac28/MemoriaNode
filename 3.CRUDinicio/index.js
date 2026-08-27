import { fastify } from 'fastify';

const server = fastify();

server.post('/v', () => {
    return 'Olá mundo';
})

server.get('/v', () => {
    return 'Olá para vc'
})

server.put('/v/:id', () => {
    return "Olá para todos"
})

server.delete('/v/:id', () => {
    return "Olá para mim"
})

server.listen({
    port: 3333
})