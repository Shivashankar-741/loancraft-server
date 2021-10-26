const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const loanRouter = require('./routes/loanRoutes');
const userRouter = require('./routes/userRoutes');
const overviewRouter = require('./routes/overviewRoutes');

const app = express();

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// routes
app.get('/', (req, res) => {
  res.send('loancraft application main route url');
});

app.use('/api/v1/loans', loanRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/overviews', overviewRouter);

module.exports = app;
