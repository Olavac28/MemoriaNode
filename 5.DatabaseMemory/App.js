import { fastify } from 'fastify';
import { DatabaseMemory } from './DatabaseMemory.js';

const server = fastify();
const database = new DatabaseMemory()

//                                 res do fastify
server.post('/palavras', (request, reply) => {
    const { id, palavra } = request.body; //pega o json do routtes.http
    
    database.anotar(id, palavra);

    //                  significa que algo foi criado
    return reply.status(201).send(); //finaliza o post mandando uma mensagem
})

server.get('/palavras', (request) => {
    const palavras = database.list();
    const search = request.query.search; //pega o query parameter

    console.log(search);

    return palavras; //fastify trata isso automaticamente
})

server.put('/palavras/:id', (request, reply) => {
    //                transforma em numero, já que os parametros sempre são strings
    const palavraID = Number(request.params.id);
    //    colocar entre chaves para pegar o valor, nn o json
    const { palavra } = request.body;

    database.reescrever(palavraID, palavra);
    
    //                  deu certo, mas não tenho nada para devolver
    return reply.status(204).send();
})

server.delete('/palavras/:id', (request, reply) => {
    const palavraID = Number(request.params.id);
    
    database.delete(palavraID);

    return reply.status(204).send();
})

server.listen({
    port: 3333
})