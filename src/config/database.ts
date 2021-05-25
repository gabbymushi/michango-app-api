import mongoose from 'mongoose';
import { constants } from './constants';

export const connectDB = async () => {
    const { DATABASE_URL } = constants;
    try {
        await mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
        console.log(`Database connected successfully`)
    } catch (e){
        console.log(`Database connection failed ${e.message}`)
    }
}