import pg from 'pg';

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pms', 
    password: 'yash1234',
    port:5432
});

export default pool