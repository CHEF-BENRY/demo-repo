import { pool } from './database.js';

const dropTables = async () => {
    try {
        console.log('dropping tables...');
        const dropTablesQuery = `
        `;
        await pool.query(dropTablesQuery);
    } catch (error) {
        console.log(error)
    }
}

const createTables = async () => {
    try {
        console.log('creating cats...');
        const createQuery = `
                CREATE TABLE IF NOT EXISTS cats (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                name TEXT NOT NULL

            );
        `;
        await pool.query(createQuery);
        console.log('created cats');

    } catch (error) {
        console.log(error)
    }
}

const insertData = async () => {
    try {
        console.log('adding initial data...');
        const insertQuery = `
            INSERT INTO cats (name, color, human) VALUES ('jiji','black', 'kiki');
            
        `;
        await pool.query(insertQuery);
    } catch (error) {
        console.log(error)
    }
}

const setup = async () => {
    // await dropTables();
    await createTables();
    await insertData();
}

setup();
