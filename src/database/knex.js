import "dotenv/config";

export default {
    development: {
        client: "pg",
        connection: {
            host: process.env.PGHOST,
            port: process.env.PGPORT,
            database: process.env.PGDATABASE,
            user: process.env.PGUSER,
            password: process.env.PGPASSWORD
        }
    }
};