// ! findReplace all "Gizmo" with "YourNewGizmoityName" or whatever your new thing is 
// ! THEN do similar find replace for "gizmo" Make sure lower case
// line below required on both model and config
const mongoose = require("mongoose"); 

// what is the significance of the word 'new' in line below?
const rockOutNewCollection = new mongoose.Schema (
    {
        // ! update field names/types in this object 
        stringFieldOne: {
            type: String
            , required: [true, "yo, this field is required, fool!"]
                // min is for numbers; minlength is for string.  same thing with max
            , maxlength: [120, "Title must be 120 characters or less"]
            , default: "N/A"
        }
        , stringFieldTwo: {
            type: String
            , required: [true, "yo, this field is required, fool!"]
                // min is for numbers; minlength is for string.  same thing with max
            , maxlength: [120, "Title must be 120 characters or less"]
            , default: "N/A"
        }
        , numberField: {
            type: Number
            // , min: [1920, "no pre-1920 movies, man"]
        }
        , enumString: {
            type: String
            , enum: [
                "G"
                , "PG"
                , "PG-13"
                , "R"
                , "NC-17"
            ]
            // , required: [true, "need a selection, dude"]
        }
        , isBooleanField: {
            type: Boolean
            , default: false
         }
         , listField: {
            type: [String]
        }
    }, 
    {
        timestamps: true
    }
); 

// ! update name of collection below, specific to what you want to create here.  change "gizmo" in next line to "studgizmos" or "users" or "widgets"
module.exports= mongoose.model('gizmo', rockOutNewCollection); 

// below-is-deprecated-version 
// const Gizmo = mongoose.model('gizmo', rockOutNewCollection); 
// module.exports = Gizmo; 