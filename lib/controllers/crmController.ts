import * as mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel'
import { Request, Response } from 'express';

const Contact = mongoose.model('Contacts', ContactSchema);
export class ContactController {

    public addNewContact(req: Request, res: Response) {
        let newContact = new Contact(req.body);
        newContact.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public getContacts(req: Request, res: Response) {
        Contact.find({}, (err, contacts) => {
            if (err) {
                res.send(err);
            }
            res.json(contacts);
        });
    }

    public getContactWithID(req: Request, res: Response) {
        Contact.findById(req.params.contactId, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public updateContact(req: Request, res: Response) {
        Contact.findByIdAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact)
        });
    }

    public deleteContact(req: Request, res: Response) {
        Contact.remove({ _id: req.params.contactId }, err => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully delete contact!' });
        });
    }
}