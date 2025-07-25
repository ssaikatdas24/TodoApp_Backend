const mongoose = require('mongoose');
// schema -> descriptions
// todo ->todo type kaa ek object bana aur db mei add kar
const todoSchema = new mongoose.Schema(
    {
        title: {
            type:String,
            required: true,
            maxLength : 50,
        },
        description:{
            type: String,
            required: true,
            maxLength : 50,
        },
        createdAt : {
            type:Date,
            required: true,
            default : Date. now(),
        },
        updatedAt: {
            type:Date,
            required: true,
            default : Date. now( ) ,
        }
}
);
module.exports = mongoose.model("Todo",todoSchema);