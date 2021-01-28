import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from './routes/crmRoutes';
import * as mongoose from 'mongoose';
import { AddressRoutes } from "./routes/addressRoutes";
class App {
    public app: express.Application = express();
    public routePrv = new Routes();
    public addressPrv = new AddressRoutes();
    public mongoUrl: string = 'mongodb://localhost/CRMdb';

    constructor() {
        this.config();
        this.mongoSetup();
        this.routePrv.routes(this.app);
        this.addressPrv.routes(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));

    }

    private mongoSetup(): void {
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });
    }
}

export default new App().app;