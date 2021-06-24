const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');

const connectDB = require('./config/database');
const errorHandler = require('./middleware/errorHandler');

// Routes
const authRouter = require('./routes/auth');

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api/auth', authRouter);

app.get('/', (req, res) => res.send('The API is running...'));

const PORT = process.env.PORT || 3001;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} on port ${PORT}`.cyan.inverse
  )
);
