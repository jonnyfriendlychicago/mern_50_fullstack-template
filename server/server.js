const express = require("express"); 
const cors = require('cors');
const app = express(); 
require('./config/mongoose.config'); 

// below is "body parser"
app.use(express.json()); 
app.use(express.urlencoded({extended: true})); 

// below makes cors work
app.use(cors()); 
//! for exam, use line above instead of section below
// app.use(cors({origin: "http://localhost:3000" })); 

// all routes must be listed here: below the express.json/urlencoded and above the port/app.listen 
// ! update name of route file below
require('./routes/gizmo.routes')(app); 

const port = 8000; 
app.listen(port, () => {
    console.log(`Express server running on port ${port}.  Rack 'em.`)
});

