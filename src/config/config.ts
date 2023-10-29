import { Dialect } from 'sequelize';
import env from '../utils/validate-env';

interface dbConfig {
    [key: string]: {
        username: string;
        password: string;
        database: string;
        host: string;
        dialect: Dialect;
    };
}

export const config: dbConfig = {
    development: {
        username: env.MYSQL_USER,
        password: env.MYSQL_PASSWORD,
        database: "machine_on_rent_dev",
        host: env.MYSQL_HOST,
        dialect: 'mysql'
    },
    staging: {
        username: env.MYSQL_USER,
        password: env.MYSQL_PASSWORD,
        database: "machine_on_rent_stag",
        host: env.MYSQL_HOST,
        dialect: 'mysql'
    },
    production: {
        username: env.MYSQL_USER,
        password: env.MYSQL_PASSWORD,
        database: "machine_on_rent_prod",
        host: env.MYSQL_HOST,
        dialect: 'mysql'
    }
}