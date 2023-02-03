const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    _id : {
        type : Number
    },

    first_name : {
        type : String
    },

    last_name : {
        type : String
    },
    birthday : {
        type : String
    }

});



const Users = mongoose.model('users', UsersSchema);

module.exports = Users;