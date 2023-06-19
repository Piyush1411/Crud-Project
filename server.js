const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const crudRoute = require('./routes/crud');

const connectDB = require('./config/db');
dotenv.config({ path: './env'})
connectDB()

const app = express();
app.use(express.json())

if(process.env.MODE === 'development'){
    app.use(morgan('dev'))
}
const PORT = process.env.PORT || 5000;

app.use('/api/task', crudRoute)

app.get('/', (req, res) => {
    res.send('API is running good')
})
//Cors Policy for error while connecting to frontend
app.use(cors())

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow.bold));