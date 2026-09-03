import pool from './database.js';

async function criarTabela() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS pessoas (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                idade INTEGER,
                altura DECIMAL
            );`
        );
    } 
    catch(e) {
        console.error(e);
    }
}