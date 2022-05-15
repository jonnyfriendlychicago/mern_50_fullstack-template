
// ! findReplace all "Gizmo" with "YourNewGizmoityName" or whatever your new thing is 
// ! THEN do similar find replace for "gizmo" Make sure lower case
const Gizmo = require('../models/gizmo.model'); 

const homePageDelivery =  (request, response) => {
// ! Update "Pistons" below to be any other sports team ("Angels?") which will verify the sever you see is this newly one you just created. 
    response.send("Hello, world.  May the Great Spirit smile upon us today.  Go Pistons.")
}; 

const createGizmo = (request, response) => {
    console.log("createGizmo: request.body:", request.body)
    Gizmo.create(request.body)
    .then((newGizmo) => {
        response.status(201).json(newGizmo); 
    })
    .catch((err) => {
        response.status(500).json({message: "createGizmo encountered an error", error: err}); 
    }); 
}; 

const getGizmos = (request, response) => {
    Gizmo.find({})
    .then((gizmos) => {
        response.json(gizmos); 
    })
    .catch((err) => {
        response.status(500).json({message: "getGizmos encountered an error", error: err}); 
    }); 
}; 

const getGizmoById = (request, response) => {
    // Gizmo.find({ "_id": request.params.id })
    // above-is-one-way-to-do-it , Mach recommends below instead.  but above is required if searching by another field.  
    Gizmo.findById(request.params.id )
    .then((gizmo) => {
        response.json(gizmo); 
    })
    .catch((err) => {
        response.status(500).json({message: "getGizmoById encountered an error", error: err}); 
    }); 
}; 

const updateGizmo = (request, response) => {
    Gizmo.findByIdAndUpdate (request.params.id, request.body , {new: true} )
    .then((gizmo) => {
        response.json(gizmo); 
    })
    .catch((err) => {
        response.status(500).json({message: "updateGizmo encountered an error", error: err}); 
    }); 
}; 

// module.exports.updatePerson = (request, response) => {
//     Person.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
//         .then(updatedPerson => response.json(updatedPerson))
//         .catch(err => response.json(err))
// }

const deleteGizmo = (request, response) => {
    Gizmo.findByIdAndDelete(request.params.id )
    .then((gizmo) => {
        response.json(gizmo); 
    })
    .catch((err) => {
        response.status(500).json({message: "deleteGizmo encountered an error", error: err}); 
    }); 
}; 

module.exports = {
    createGizmo, 
    getGizmos, 
    getGizmoById, 
    updateGizmo, 
    deleteGizmo, 
    homePageDelivery
};