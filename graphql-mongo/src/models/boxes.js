import mongoose from 'mongoose';
import User from './users'
const { ObjectId } = mongoose.Types;

ObjectId.prototype.valueOf = function () {
    return this.toString()
};

var Schema = mongoose.Schema;

var BoxSchema = new Schema({
    name: {
        type: String
    },
    users: {
        type: Schema.Types.ObjectId,
        ref: 'users',
    }
});

export default mongoose.model('boxes', BoxSchema);