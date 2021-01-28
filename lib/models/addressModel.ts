import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const AddressSchema = new Schema({
    village: {
        type: String,
        required: 'Enter your village'
    },
    post_office: {
        type: String,
        required: 'Enter your post office'
    },
    police_station: {
        type: String,
        required: 'Enter your police station'
    },
    block: {
        type: String,
        required: 'Enter your block'
    },
    pin_code: {
        type: Number,
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    contact_id: {
        type: String,
        required: 'Enter your contact id'
    }
})