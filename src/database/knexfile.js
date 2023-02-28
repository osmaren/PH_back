module.exports = {
    client: 'pg',
    connection: {
        host: "localhost",
        // host: process.env.PG_HOST,
        port: "5432",
        // port: process.env.PG_PORT,
        database: "base",
        // database: process.env.PG_DB,
        user: "osmar",
        // user: process.env.PG_USER,
        password: "1234",
        // password: process.env.PG_PASSWORD,
    },
    pool: { min: 2, max: 10 },
    migrations: {
        tableName: "knex_migrations",
        directory: './src/database/migrations'
    }
};
