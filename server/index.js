const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const cntrl = require('./controller');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING).then(database => {
    console.log('connected to db')
    app.set('db',database);
}).catch(error => {
    console.log('There was an error getting db',error);
})


app.get('/api/house', cntrl.gethouses);
app.get('/api/house:id', cntrl.gethouse);
app.post('/api/house', cntrl.createhouse);
app.put('/api/house:id',cntrl.edithouse);
app.delete('/api/house:id',cntrl.deletehouse);









const PORT = 4001;
app.listen(PORT, () => {console.log(`server is up and running ${PORT}`)});