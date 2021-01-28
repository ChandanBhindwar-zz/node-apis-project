import { Request, Response } from 'express';
import { AddressController } from '../controllers/addressController';

export class AddressRoutes {

    public addressController: AddressController = new AddressController();

    public routes(app): void {
        app.route('/address').
        // get((req:Request,res:Response)=>{
        //     res.status(200).send({
        //         message:'GET address request successfulll!!!!'
        //     });
        // }).
        get(this.addressController.getAddress).
        post(this.addressController.addNewAddress);
    }
}