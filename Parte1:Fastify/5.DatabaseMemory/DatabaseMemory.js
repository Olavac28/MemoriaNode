export class DatabaseMemory {
    #palavras = new Map() //funciona tipo objeto e é ótimo para isso

    anotar(id, palavra) {           
        //                chave, valor 
        this.#palavras.set(id, palavra); //pode tanto criar um novo quanto atualizar, depende do que colocar na chave
    }

    list() {
        //                              só os valores, sem as chaves
        //return Array.from(this.#palavras.values()); //retorna um array
        return Array.from(this.#palavras); //retorna um array
    }

    reescrever(id, palavra) {
        this.#palavras.set(id, palavra);
    }

    delete(id) {
        this.#palavras.delete(id); //deleta onde tiver essa chave
    }
}

/*
    outros detales do Map

    usuarios.set("João", { idade: 20, altura: 1.90 }); //para ter outros itens

    const objeto = Object.fromEntries(usuarios); //trasforma em objeto
*/