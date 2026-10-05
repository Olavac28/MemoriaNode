import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'withdatabase',
    password: process.env.DB_PASSWORD,
    port: 5432
})

export default pool;