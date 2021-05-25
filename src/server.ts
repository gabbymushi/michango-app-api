import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import { middlewaresConfig } from './config/middlewares';
import { constants } from './config/constants';
import { connectDB } from './config/database';
import { seedInitialData } from './config/seeder';
import { initializeRoutes } from './modules';
import { User } from './modules/users/user.model';

const schema = buildSchema(`
  type Query {
    welcome: String,
    users:[User]
  },
  type User {
    firstName: String,
    lastName: String
  },
  type Users {
      users:[User]
  }
`);

const root = {
    welcome: () => {
        return 'Welcome to iPF App!';
    },
    users: async () => {
        return await User.find();
    },
};

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

middlewaresConfig(app);
connectDB();
initializeRoutes(app);
//seedInitialData();


app.listen(constants.PORT, () => console.log(`Server is running on port ${constants.PORT}`));