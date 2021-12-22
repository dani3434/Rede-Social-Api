const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

// Rotas
const userRoute = require('./routes/users.js');
const authRoute = require('./routes/auth.js');

app.use('/api/users',userRoute);
app.use('/api/auth',authRoute);



dotenv.config();

mongoose.connect(process.env.MONGO_URL,() => {
  console.log('Mongodb Conectado');
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));


app.listen(8800,() => {
  console.log('Backend server is running!');
})