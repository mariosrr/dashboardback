import express from 'express';
import config from './config';
import entriesRoutes from './routes/warehouseEntry.routes'
import cors from 'cors'

const app = express();
app.use(cors());

app.set('port', config.port);
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(entriesRoutes);

module.exports = app;