// ! findReplace all "Ent" with "YourNewProductityName" or whatever your new thing is 
// ! THEN do similar find replace for "ent" Make sure lower case

const EntController = require("../controllers/ent.controller"); 

module.exports = (app) => {
    app.get('/', EntController.homePageDelivery); 
    app.get("/api/ents", EntController.getEnts); 
    app.post("/api/ents",EntController.createEnt); 
    app.get("/api/ents/:id", EntController.getEntById); 
    app.put("/api/ents/:id", EntController.updateEnt); 
    app.delete("/api/ents/:id", EntController.deleteEnt); 
};

