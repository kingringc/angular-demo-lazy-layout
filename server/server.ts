import * as express from 'express';
import * as bodyParser from 'body-parser';

import { getAllUsers } from "./get-users.route";
import { addNewUser } from './add-new-user.route';
 
const app = express();

app.use(bodyParser.json());

//routes start here
app.route('/api/users').get(getAllUsers);

app.route('/api/users').post(addNewUser);

const httpServer = app.listen(9000, () => {
    console.log(`HTTP REST API, Server running at ${httpServer.address().port}`)
});