# node-apis-project
This is project structure.
Follow me for create new nodeTS web api.

Step 1: Initiate a Node project
        01. mkdir node-apis-project
        02. cd node-apis-project
        03. npm init
        
Step 2: Install all the dependencies
        04. npm install --save @types/express express body-parser mongoose nodemon
        
Step 3: Configure the TypeScript configuration file (tsconfig.json)
        05. {
                "compilerOptions": {
                "module": "commonjs",
                "moduleResolution": "node",
                "pretty": true,
                "sourceMap": true,
                "target": "es6",
                "outDir": "./dist",
                "baseUrl": "./lib"
                },
                "include": [
                "lib/**/*.ts"
                ],
                "exclude": [
                "node_modules"
                ]
            }
            
Step 4: edit the running scripts in package.json
        06. {
                "scripts": {
                                "build": "tsc",
                                "dev": "ts-node ./lib/server.ts",
                                "start": "nodemon ./dist/server.js",
                                "prod": "npm run build && npm run start"
                           }
            }

Step 5: getting started with the base configurationStep 5: getting started with the base configuration
        07. // lib/app.ts
            import * as express from "express";
            import * as bodyParser from "body-parser";
            class App {
            public app: express.Application;
            constructor() {
            this.app = express();
            this.config();
            }
            private config(): void{
            // support application/json type post data
            this.app.use(bodyParser.json());
            //support application/x-www-form-urlencoded post data
            this.app.use(bodyParser.urlencoded({ extended: false }));
            }
            }
            export default new App().app;
        08. // lib/server.ts
            import app from "./app";
            const PORT = 3000;
            app.listen(PORT, () => {
            console.log('Express server listening on port ' + PORT);
            })
            
Step 06: Create TS file for routing
         01. // /lib/routes/crmRoutes.ts
            import {Request, Response} from "express";
            export class Routes {
            public routes(app): void {
                                        app.route('/')
                                        .get((req: Request, res: Response) => {
                                        res.status(200).send({
                                        message: 'GET request successfulll!!!!'
                                        })
                                        })
                                    }
            }
         02. After creating our first route, we need to import it to the lib/app.ts.

Step 07: Create Model for your data
         01.// /lib/models/crmModel.ts
                import * as mongoose from 'mongoose';
                const Schema = mongoose.Schema;
                export const ContactSchema = new Schema({
                firstName: {
                type: String,
                required: 'Enter a first name'
                },
                lastName: {
                type: String,
                required: 'Enter a last name'
                },
                email: {
                type: String
                },
                company: {
                type: String
                },
                phone: {
                type: Number
                },
                created_date: {
                type: Date,
                default: Date.now
                }
                });

Step 08: Create your first Controller
        01. // /lib/controllers/crmController.ts
            import * as mongoose from 'mongoose';
            import { ContactSchema } from '../models/crmModel';
            import { Request, Response } from 'express';
            const Contact = mongoose.model('Contact', ContactSchema);
            export class ContactController{
            ...
            public addNewContact (req: Request, res: Response) {
            let newContact = new Contact(req.body);
            newContact.save((err, contact) => {
            if(err){
            res.send(err);
            }
            res.json(contact);
            });
            }

        02. // /lib/routes/crmRoutes.ts
            import { ContactController } from "../controllers/crmController";
            public contactController: ContactController = new ContactController();
            // Create a new contact
            app.route('/contact')
            .post(this.contactController.addNewContact); 

Step 09: Connect Web APIs to MongoDB
        01. // lib/app.ts
                import * as mongoose from "mongoose";
                class App {
                ...
                public mongoUrl: string = 'mongodb://localhost/CRMdb';
                constructor() {
                ...
                this.mongoSetup();
                }
                private mongoSetup(): void{
                mongoose.Promise = global.Promise;
                mongoose.connect(this.mongoUrl);
                }
                }
                export default new App().app;


Step 10: You have reched on Goal. Let's play with Postman and Enjoy now!!!!!!!!!!!!!!!
