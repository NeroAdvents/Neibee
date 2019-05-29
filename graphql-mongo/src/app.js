import express from 'express'
import cors from 'cors'
import graphqlHTTP from 'express-graphql';
import schema from './schemas'
import mongoose from 'mongoose'

const app = express();
const PORT = 4000;

mongoose.Promise = global.Promise
mongoose.connect('mongodb://192.168.2.31:27017/local', { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', () => {
    console.log('failed to connect to database')
});
//var options = {origin: "*"}
app.use(cors())
/*app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});*/
/*app.use((req, res, next) => {
    req.header('Access-Control-Allow-Origin', '*');
    req.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
})*/
app.use('/', graphqlHTTP({
        schema: schema,
        graphiql: true,
        context: {
            status: 400,
            id: null
        }
    }
));

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
});
