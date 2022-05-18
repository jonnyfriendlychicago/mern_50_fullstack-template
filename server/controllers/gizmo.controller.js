
// ! findReplace all "Gizmo" with "YourNewGizmoityName" or whatever your new thing is 
// ! THEN do similar find replace for "gizmo" Make sure lower case
const Gizmo = require('../models/gizmo.model'); 

module.exports = {

    homePageDelivery : (request, response) => {
    // ! Update "Pistons" below to be any other sports team ("Angels?") which will verify the sever you see is this newly one you just created. 
        response.send("Hello, world.  May the Great Spirit smile upon us today.  Go Pistons.")
    }, 

    //! below section is original 
    
    // createGizmo : (request, response) => {
    //     Gizmo
    //         .create(request.body)
    //         .then((newGizmo) => {response.status(201).json(newGizmo); })
    //         .catch((err) => {response.status(500).json({message: "createGizmo encountered an error", error: err}); }); 
    // }, 

    // ! below section is overhauled for validation:

    createGizmo : (request, response) => {
        const {
            stringFieldOne
            , numberField
            , isBoolean
            , enumString
            , listField
        } = request.body; 
        Gizmo
            .create( 
                    {
                    stringFieldOne: stringFieldOne
                    , numberField: numberField
                    , isBoolean : isBoolean
                    , enumString: enumString
                    , listField : listField
                    }
            )
            .then((newGizmo) => {response.status(201).json(newGizmo); })
            // .catch((err) => {response.status(400).json({message: "createGizmo encountered an error", error: err}); // this was orig
            // .catch((err) => {response.status(400).json({ message: 'Something went wrong in create', error: err}); // this copied from other working file
            // ! above line replaced by below line
            .catch(err => response.status(400).json(err))
    }, 
    
    getGizmos : (request, response) => {
        Gizmo
            .find({})
            .then((gizmos) => {response.json(gizmos); })
            .catch((err) => {response.status(400).json({message: "getGizmos encountered an error", error: err}); }); 
    }, 

    getGizmoById : (request, response) => {
    // Gizmo.find({ "_id": request.params.id })
    // above-is-one-way-to-do-it , Mach recommends below instead.  but above is required if searching by another field.  
        Gizmo
            .findById(request.params.id )
            .then((gizmo) => {response.json(gizmo); })
            .catch((err) => {response.status(400).json({message: "getGizmoById encountered an error", error: err}); }); 
    },

    //! below section is original 
    // updateGizmo : (request, response) => {
    //     Gizmo
    //         .findByIdAndUpdate (request.params.id, request.body , {new: true} )
    //         .then((gizmo) => {response.json(gizmo); })
    //         .catch((err) => {response.status(400).json({message: "updateGizmo encountered an error", error: err}); }); 
    // }, 

    // ! below section is overhauled for validation:

    updateGizmo : (request, response) => {
        const {
            stringFieldOne
            , numberField
            , isBoolean
            , enumString
            , listField
        } = request.body; 
        Gizmo
            .findByIdAndUpdate(
                request.params.id
                , {
                    stringFieldOne: stringFieldOne
                    , numberField: numberField
                    , isBoolean : isBoolean
                    , enumString: enumString
                    , listField : listField
                }
                , {new: true, runValidators: true} 
            )
            .then((gizmo) => {response.status(201).json(gizmo); })
            .catch(err => response.status(400).json(err))
    }, 

    deleteGizmo : (request, response) => {
        Gizmo
            .findByIdAndDelete(request.params.id )
            .then((gizmo) => {response.json(gizmo); })
            .catch((err) => {response.status(400).json({message: "deleteGizmo encountered an error", error: err}); }); 
    }
}; 

