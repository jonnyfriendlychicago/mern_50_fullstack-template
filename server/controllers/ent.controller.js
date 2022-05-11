
// ! findReplace all "Ent" with "YourNewEntityName" or whatever your new thing is 
// ! THEN do similar find replace for "ent" Make sure lower case
const Ent = require('../models/ent.model'); 

const homePageDelivery =  (request, response) => {
// ! Update "Pistons" below to be any other sports team ("Angels?") which will verify the sever you see is this newly one you just created. 
    response.send("Hello, world.  May the Great Spirit smile upon us today.  Go Pistons.")
}; 

const createEnt = (request, response) => {
    console.log("createEnt: request.body:", request.body)
    Ent.create(request.body)
    .then((newEnt) => {
        response.status(201).json(newEnt); 
    })
    .catch((err) => {
        response.status(500).json({message: "createEnt encountered an error", error: err}); 
    }); 
}; 

const getEnts = (request, response) => {
    Ent.find({})
    .then((ents) => {
        response.json(ents); 
    })
    .catch((err) => {
        response.status(500).json({message: "getEnts encountered an error", error: err}); 
    }); 
}; 

const getEntById = (request, response) => {
    // Ent.find({ "_id": request.params.id })
    // above-is-one-way-to-do-it , Mach recommends below instead.  but above is required if searching by another field.  
    Ent.findById(request.params.id )
    .then((ent) => {
        response.json(ent); 
    })
    .catch((err) => {
        response.status(500).json({message: "getEntById encountered an error", error: err}); 
    }); 
}; 

const updateEnt = (request, response) => {
    Ent.findByIdAndUpdate (request.params.id, request.body , {new: true} )
    .then((ent) => {
        response.json(ent); 
    })
    .catch((err) => {
        response.status(500).json({message: "updateEnt encountered an error", error: err}); 
    }); 
}; 

const deleteEnt = (request, response) => {
    Ent.findByIdAndDelete(request.params.id )
    .then((ent) => {
        response.json(ent); 
    })
    .catch((err) => {
        response.status(500).json({message: "deleteEnt encountered an error", error: err}); 
    }); 
}; 

module.exports = {
    createEnt, 
    getEnts, 
    getEntById, 
    updateEnt, 
    deleteEnt, 
    homePageDelivery
};