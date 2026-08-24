import { fastify } from 'fastify';
import { DatabaseMemory } from './DatabaseMemory.js';

const server = fastify();
const database = new DatabaseMemory()

//                                 request do fastify
server.post('/palavras', (request, reply) => {
    const { id, palavra } = request.body; //pega o json do routtes.http
    
    database.anotar(id, palavra);

    console.log(database.list());

    //                  significa que algo foi criado
    return reply.status(201).send(); //finaliza o post mandando uma mensagem
})

server.get('/palavras', () => {
    return 'Olá para vc'
})

server.put('/palavras/:id', () => {
    return "Olá para todos"
})

server.delete('/palavras/:id', () => {
    return "Olá para mim"
})

server.listen({
    port: 3333
})