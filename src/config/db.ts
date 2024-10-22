// db.js
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
    host: 'localhost',  // or 'postgres' if you want to use Docker service name
    port: 5432,
    user: 'dhruv',
    password: 'dhruv6969',
    database: 'discord',
});

export const db = drizzle(pool);
