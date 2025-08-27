const mongoose = require("mongoose");
const validator = require("validator")
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,

    },
    lastName: {
        type: String,

    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        trime: true,
        lowercase: true,

        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Enter a valid email")
            }
        }

    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        validate(value){
            if(validator.isStrongPassword(value)){
                throw new Error("Enter a valid password")
            }
        }

    },
    age: {

        type: Number,

    },
    gender: {
        type: String,

        validate(value) {
            if (!["male", "Male", "female", "Female", "other"].includes(value)) {
                throw new Error("Gender is not valid")
            }
        }
    },
    photoUrl:{
        type:String,
        default:""
    }

},
{
    timestamps:true,
});


const User = mongoose.model("User",userSchema);

module.exports=User;

