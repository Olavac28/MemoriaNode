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
}