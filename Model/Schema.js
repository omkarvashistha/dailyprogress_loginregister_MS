require('dotenv').config();

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Connect to Login Register DB');
})

const userSchema = new mongoose.Schema({
    userId : {
        type : String,
        required : true,
        unique : true,
    },
    username : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    }
},
{
    timestamps : {
        createdAt : true,
        updatedAt : true,
    },
});

const users = mongoose.model('users',userSchema);

module.exports = users;

