import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import helment from 'helmet';

dotenv.config();

export const middlewaresConfig = (app: express.Application) => {
    app.use(cors());
    app.use(morgan('dev'));
    app.use(helment());
    app.use(express.json());

    //check api status
    app.get('/', (_, res) => {
        res.status(200).send('ok')
    })
}