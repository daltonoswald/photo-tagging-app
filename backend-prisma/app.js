const express = require('express');
const indexRouter = require('./routes/indexRouter');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
require('dotenv').config();

const path = require('node:path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: [
        `http://localhost:5173`,
        `https://daltonoswald-photo-tagging-app.netlify.app`
        `*`
    ],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    optionsSuccessStatus: 204,
}))

app.use('/', indexRouter);

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.use(express.static('./public'));

app.set('views', path.join(__dirname, "views"));
app.set('view engine', 'ejs');

app.listen(process.env.PORT || PORT, () => console.log(`Photo Tagging App listening on port ${process.env.PORT || PORT}`));