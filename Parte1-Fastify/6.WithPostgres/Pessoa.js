import pool from './database.js'

export class Pessoa {
    async cadastrar(nome, idade, altura) {
        try {
            await pool.query(`
                INSERT INTO pessoas(nome, idade, altura) VALUES ($1, $2, $3)`,
            [nome, idade, altura]);
        }
        catch(e) {
            console.log(e);
        }
    }

    async verRegistroInteiro() {
        try {
            const registros = await pool.query('SELECT * FROM pessoas');

            //              imporante para trazer só o necessario do objeto
            return registros.rows;
        }
        catch(e) {
            console.log(e);
        }
    }

    async verUmRegistro(id) {
        try {
            const registro = await pool.query(`
                SELECT * FROM pessoas WHERE id = $1`,
            [id]);

            //                  só vê o primeiro e unico elemento
            return registro.rows[0];
        }
        catch(e) {
            console.log(e);
        }
    }

    async alterarRegistro(id, idade, altura) {
        try {               //nn aceita mais de um comando
            await pool.query(`
                UPDATE pessoas SET idade = $2, altura = $3 WHERE id = $1;`,
            [id, idade, altura]);
        }
        catch(e) {
            console.log(e);
        }
    }

    async deletarRegistro(id) {
        try {
            await pool.query(`
                DELETE FROM pessoas WHERE id = $1`,
            [id]);
        }
        catch(e) {
            console.log(e);
        }
    }
}