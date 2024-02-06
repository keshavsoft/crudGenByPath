import { StartFunc as StartFuncPortListen } from "./PortListen.js";

import { router as routerbinByPath } from "./bin/routes.js";

import { router as routerboilerPlate } from "./config/routes.js";

import { router as routerFromSrc } from "./src/routes.js";

import { router as routerForLogin } from "./login/routes.js";

import { router as routerForUtility } from "./Utility/routes.js";

import { StartFunc as StartFuncKWSServer } from "./Projects/KWSServer/EntryFile.js";

import packageJSON from './package.json' assert {type: 'json'};

import express from 'express';
import http from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || '7016');

app.disable('x-powered-by');

app.use(cookieParser());

app.use(express.json({ limit: '100mb' }));

app.use('/', express.static(path.join(path.resolve(), 'public')));

app.get('/Version', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.end(packageJSON.version);
});

app.get('/AboutUs', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.end("KeshavSoft : 9848163021");
});

app.use('/bin', routerbinByPath);
app.use('/config', routerboilerPlate);
app.use('/src', routerFromSrc);
app.use('/login', routerForLogin);
app.use('/utility', routerForUtility);

StartFuncKWSServer(server);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, StartFuncPortListen);
