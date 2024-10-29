import pg from "pg";
import dotenv from 'dotenv';


const config = {
    connectionString: 'postgresql://postgres:AqIIVZPQkHpQmBlsBJnTlQEBztGGEsIl@autorack.proxy.rlwy.net:50373/railway'
}

const pool = new pg.Pool(config);
export {pool};