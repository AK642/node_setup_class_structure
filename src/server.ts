import 'dotenv/config';
import { createServer } from 'http';
import { App } from './app';
import env from './utils/validateEnv';
import { Sequelize } from 'sequelize';
import { config } from './config/config';
import { initMySQLModels } from './models';

const app = new App();

// Create HTTP server
const httpServer = createServer(app.express);

// Get database configuration
const environment: string = env.NODE_ENV;
const databaseConfiguration = config[environment];

// Create database connection
export const sequelize = new Sequelize(databaseConfiguration);

try {
    (async () => {
        // Authenticate database connection and sync models
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
        initMySQLModels(sequelize);
        await sequelize.sync();

        // Start the server
        httpServer.listen(env.PORT, () => {
            console.log(`Server is running on port ${env.PORT}`);
        });
    })();
}catch(err) {
    console.log("Error: ", err);
    console.log('Unable to connect to the database.');
}

