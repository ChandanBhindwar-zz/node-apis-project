import { Request, Response } from 'express';
import { ContactController } from '../controllers/crmController';

export class Routes {

    public contactController: ContactController = new ContactController();
    public routes(app): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                });
            });

        app.route('/contact')
            .post(this.contactController.addNewContact)
            .get(this.contactController.getContacts);

        app.route('/contact/:contactId')
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);


        // contact
        // app.route('/contact')
        //     .get((req: Request, res: Response) => {
        //         res.status(200).send({
        //             message:'GET contact request successfulll!!!!'
        //         })
        //     })
        //     .post((req:Request,res:Response)=>{
        //         res.status(200).send({
        //             message:'POST contact requst successfulll!!!!'
        //         })
        //     })

        //     app.route('/contact/:contactId')
        //     .get((req:Request,res:Response)=>{
        //         res.status(200).send({
        //             message:'GET contact request successfulll!!!!'
        //         })
        //     })
        //     .put((req:Request,res:Response)=>{
        //         res.status(200).send({
        //             message:'PUT contact request successfulll!!!!'
        //         })
        //     })
        //     .delete((req:Request,res:Response)=>{
        //         res.status(200).send({
        //             message:'DELETE contact request successfulll!!!!'
        //         })
        //     })
    }
}