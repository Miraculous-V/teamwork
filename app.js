// import express from 'express';
// import bodyParser from 'body-parser';
// import appRoutes from './routes/app';
// import articleRoutes from './routes/article';

// import path from 'path';
// import cookieParser from 'cookie-parser';
// import logger from 'morgan';

const express = require('express');
const articleRoutes = require('./routes/article');
const usersRoutes = require('./routes/users');
const appRoutes = require('./routes/app');
const categoriesRoutes = require('./routes/categories');
const gifRoutes = require('./routes/gifs');

const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const path = require('path');

// const userRoutes = require("./routes/user");
// const pg = require("pg");

// const cloudinary = require('cloudinary').v2;

// cloudinary.config({
//     cloud_name: 'sample',
//     api_key: '163284578578769',
//     api_secret: '4BX6aBRvCu0naiKjrgyfcrWYbAM'
//   });

// const userRoutes = require('./routes/user');

const app = express();

const path = require('path');

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.json());

//App Routes
app.use('/', appRoutes);
app.use('/api', usersRoutes);
app.use('/api', gifRoutes);
app.use('/api', articleRoutes);
app.use('/api', categoriesRoutes);

app.use('/v1', articleRoutes);

module.exports = app;
