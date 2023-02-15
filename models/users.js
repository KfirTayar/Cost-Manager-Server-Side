// Kfir Tayar 208991430
// Karin Mashkovich 313512428

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creating a schema for users in mongoDB
const UsersSchema = new Schema({
    id : {
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

const User = mongoose.model('users', UsersSchema);

// Define default user properties
const defaultUser = {
    id : 123123,
    first_name: 'moshe',
    last_name: 'israeli',
    birthday: new Date('January,10,1990').toDateString(),
};

// Creates a default user
async function createNewUser() {
    try {
        // Checks if there is a current user
        const currentUser = await User.findOne({id: defaultUser.id});
        if (currentUser) {
            console.log(`Current user: ${currentUser}`);
            return currentUser;
        }
        // If there is no current user, we create him
        const newUser = await User.create(defaultUser);
        console.log(`New user created: ${newUser}`);
    }
    catch (error) {
        console.log(error);
    }
}

// Checking the existence of the user in every running of the program
createNewUser().then().catch(function (error){console.log("User creation failed")});

module.exports = User;