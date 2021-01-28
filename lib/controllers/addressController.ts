import { Response, Request } from 'express';
import * as mongoose from 'mongoose';
import { AddressSchema } from '../models/addressModel';

const Address = mongoose.model('Addresses', AddressSchema)
export class AddressController {

    public addNewAddress(req: Request, res: Response) {
        let newAddress = new Address(req.body);
        newAddress.save((err, address) => {
            if (err) {
                res.send(err);
            }
            res.json(address);
        });
    }

    public getAddress(req: Request, res: Response) {
        Address.find({}, (err, addresses) => {
            if (err) {
                res.send(err);
            }
            res.json(addresses);
        });
    }

}