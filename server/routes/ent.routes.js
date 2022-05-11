// ! update below const to be "ProgramController" or "WhateverController" etc. 
// ! addListener, make sure all of the routes are updated
const EntController = require("../controllers/ent.controller"); 

module.exports = (app) => {
    app.get('/', EntController.homePageDelivery); 
    app.get("/api/ents", EntController.getEnts); 
    app.get("/api/ents/:id", EntController.getEntById); 
    app.post("/api/ents",EntController.createEnt); 
    app.put("/api/ents/:id", EntController.updateEnt); 
    app.delete("/api/ents/:id", EntController.deleteEnt); 
};

