// ! findReplace all "Gizmo" with "YourNewProName" or whatever your new thing is 
// ! THEN do similar find replace for "gizmo" Make sure lower case

const GizmoController = require("../controllers/gizmo.controller"); 

module.exports = (app) => {
    app.get('/', GizmoController.homePageDelivery); 
    app.get("/api/gizmos", GizmoController.getGizmos); 
    app.post("/api/gizmos",GizmoController.createGizmo); 
    app.get("/api/gizmos/:id", GizmoController.getGizmoById); 
    app.put("/api/gizmos/:id", GizmoController.updateGizmo); 
    app.delete("/api/gizmos/:id", GizmoController.deleteGizmo); 
};

