const mongoose = require("mongoose");

const batSchema = new mongoose.Schema({
    from : {
        type : String,
        required : true,
    },
    to : {
        type : String,
        required : true,
    },
    message : {
        type : String,
        maxLength : 50,
    },
    created_at : {
        type : Date,
        required : true,
    },
});

const Bat = mongoose.model("Bat", batSchema);

module.exports = Bat;