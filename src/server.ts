import express from 'express';
import { middlewaresConfig } from './config/middlewares';
import { constants } from './config/constants';
import { connectDB } from './config/database';
import { seedInitialData } from './config/seeder';
import { initializeRoutes } from './modules';

const app = express();
middlewaresConfig(app);
connectDB();
initializeRoutes(app);
//seedInitialData();


app.listen(constants.PORT, () => console.log(`Server is running on port ${constants.PORT}`));