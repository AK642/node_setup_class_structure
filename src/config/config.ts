import { Dialect } from 'sequelize';
import env from '../utils/validateEnv';

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
        database: "gsm_development",
        host: env.MYSQL_HOST,
        dialect: 'mysql'
    },
    staging: {
        username: env.MYSQL_USER,
        password: env.MYSQL_PASSWORD,
        database: "gsm_staging",
        host: env.MYSQL_HOST,
        dialect: 'mysql'
    },
    production: {
        username: env.MYSQL_USER,
        password: env.MYSQL_PASSWORD,
        database: "gsm_production",
        host: env.MYSQL_HOST,
        dialect: 'mysql'
    }
}