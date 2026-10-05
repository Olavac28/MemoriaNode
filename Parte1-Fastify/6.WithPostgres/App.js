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

server.get('/usuarios', async (request, reply) => {
    const pessoa = new Pessoa();
    const registros = await pessoa.verRegistroInteiro();

    return registros;
})

server.get('/usuarios/:id', async (request, reply) => {
    const pessoa = new Pessoa();
    const id = Number(request.params.id);
    const registro = await pessoa.verUmRegistro(id);

    return registro;
})

server.put('/usuarios/:id', async (request, reply) => {
    const pessoa = new Pessoa();
    const id = Number(request.params.id)
    const { idade, altura } = request.body;
    
    pessoa.alterarRegistro(id, idade, altura);

    return reply.status(204).send();
})

server.delete('/usuarios/:id', async (request, reply) => {
    const pessoa = new Pessoa();
    const id = Number(request.params.id);

    pessoa.deletarRegistro(id);

    return reply.status(204).send();
})

server.listen({
    port: 3333
})