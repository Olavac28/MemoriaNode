//usa o ES Modules, um jeito mais moderno e recomendado de criar um server node
//porém precisa de configurar o projeto no package.json (foi adicionado =="type": "module",== provavelmente na linha 6)
import { createServer } from "node:http";

const server = createServer((req, res) => {
    console.log('oi'); //manda essa mensagem quando o site for aberto (ele provavelmente nn vai carregar se tiver só ela na função)
    return res.end('oi'); //finaliza a resposta HTTP daquela requisição; o return termina a função
})

server.listen(3333);