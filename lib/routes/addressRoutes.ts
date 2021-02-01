import { Request, response, Response } from 'express';
import { AddressController } from '../controllers/addressController';


const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY='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'
// sgMail.setApiKey('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');
sgMail.setApiKey('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');
const fs = require("fs");

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
        app.route('/mailCheck').
            get((req: Request, res: Response) => {
                var pathToAttachment = `${__dirname}/1.pdf`;
               var attachment = fs.readFileSync(pathToAttachment).toString("base64");
              // response()
                // var attachment = fs.readFile('http://starkpayapi.myconecion.com/loginImage/brooke-cagle-195777-unsplash.jpg',(err,data)=>{
                //     if(err)
                //     console.log('err',err);
                //     console.log('data',data);
                // });

                const msg = {
                    to: 'chandan.kr.bhindwar@gmail.com',
                    from: 'chandanbhindwar@outlook.com',
                    subject: 'Sending with SendGrid is Fun',
                    text: 'and easy to do anywhere, even with Node.js',
                    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
                    attachments: [
                        {
                            content: attachment,
                           filename: "xxxxxxxxxxxxxx/adharcard1.pdf",
                            // type: "application/pdf",
                           // disposition: "attachment"
                        }
                    ]
                };
               // console.log('msg ', msg);
                sgMail.send(msg,()=>{
                    res.status(200).json(msg);
                }).catch(err => {
                    console.log('Error hi bhaiy ',err); 
                    res.status(200).json(err);
                });
                // sgMail.send(msg).then(() => {
                //     // fs.unlink(filename, (err) => {
                //     //     if (err) console.log(err);
                //     //     else {
                //     //     console.log("item deleted sucessully");
                //     //     }
                //     // });
                //     console.log("item deleted sucessully");
                //     res.status(200).send({
                //         message: 'GET mail check request successfull!!!!!!!!!!!!'
                //     });
                // }).catch(err => {
                //     console.log(err);
                // });
                // res.status(200).send({
                //     message: 'GET mail check request successfull!!!!!!!!!!!!'
                // });
            })
    }
}