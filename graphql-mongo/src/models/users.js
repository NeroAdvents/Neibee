import mongoose from 'mongoose';
const { ObjectId } = mongoose.Types;

ObjectId.prototype.valueOf = function () {
    return this.toString()
};

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone_number: {
        type: Number,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    zip: {
        type: Number,
        required: false
    },
});

export default mongoose.model('users', UserSchema);