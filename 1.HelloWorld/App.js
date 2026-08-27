const http = require('http');

//                                request, response
const server = http.createServer((req, res) => { //acontece quando o server for iniciado
    if(req.url === '/') { //se o servidor for http://localhost:3000/
        //  anda uma mensagem e termina a função
        res.end('Servidor Funcionando'); //manda uma mensagem quando o server é criado
    }

    if(req.url === '/usuarios') { //se o servidor for http://localhost:3000/usuarios
        res.setHeader('Content-Type', 'application/json'); //diz que quer passar um json
        res.end(JSON.stringify( //faz um objeto se tornar json
            {
                nome: 'Pedro',
                idade: 9
            }
        ))
    }
});

server.listen(3000); //cria o servidor em http://localhost:3000/