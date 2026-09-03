import { fastify } from 'fastify';
import { Pessoa } from "./Pessoa.js";

const server = fastify();

//                       colocar aqui com async
server.post('/usuarios', async (request, reply) => {
    const usuario = request.body;

    const pessoa = new Pessoa();
    //aqui como await
    await pessoa.cadastrar(usuario.nome, usuario.idade, usuario.altura);

    return reply.status(201).send();
})

server.listen({
    port: 3333
})