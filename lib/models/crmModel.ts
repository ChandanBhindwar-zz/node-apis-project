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
    compony: {
        type: String
    },
    phone: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})