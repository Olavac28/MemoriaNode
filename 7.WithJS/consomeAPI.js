async function cadastrar(objeto) {
    const resposta = await fetch("http://localhost:3333/usuarios", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objeto)
    });

    console.log(resposta.status);
}

async function verRegistroInteiro() {
    const resposta = await fetch("http://localhost:3333/usuarios");
    const registro = await resposta.json(); //para nn trazer o status junto

    console.log(registro);
}

async function verUmRegistro(id) {
    const resposta = await fetch("http://localhost:3333/usuarios/" + id);
    const registro = await resposta.json();

    console.log(registro);
}

async function alterarRegistro(id, objeto) {
    const resposta = await fetch("http://localhost:3333/usuarios/" + id, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objeto)
    });

    console.log(resposta.status);
}

async function deletarRegistro(id) {
    const resposta = await fetch("http://localhost:3333/usuarios/" + id, {
        method: 'DELETE'
    });

    console.log(resposta.status);
}

//nn faz em ordem
//cadastrar(objeto);
//verRegistroInteiro();

/*
    funciona em ordem
    async function main() {
        await cadastrar(objeto);
        await verRegistroInteiro();
    }   
    main();
*/