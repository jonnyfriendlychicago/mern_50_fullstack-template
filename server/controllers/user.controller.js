const User = require('../models/user.model'); 
const bcrypt = require("bcrypt"); 
const jwt = require("jsonwebtoken"); 

module.exports = {

    register: (req, res) => {
        const {
            userName
            , email
            , password
            , passwordConfirm
        } = req.body; 
        
        // creating a new user and saving it as a variable
        const userCreate = new User(req.body) // this variable is basically an instance of a class, rough analogy. 
        
        userCreate
            .save()
            .then( console.log("user.controller: new reg initiated."))
            .then((newUser) => {
                console.log("user.controller: registration success."); 
                console.log("newUser: ", newUser); 
                res.json ({
                    successMessage: "Thank you for registering.  You = the best.", 
                    user: newUser
                })
            })
            .catch( (err) => {
                console.log("user.controller: registration failed."); 
                // console.log("user.controller - err._message: ", err._message)
                console.log("user.controller - Error Details: \n", err)
                // res.status(400).json(err)
                res.status(400).json( {message: "register encountered an error.", errors: err.errors})
            })
    }, 

    login: (req, res) => {
        User
            .findOne({ email: req.body.email })
            .then( (userRecord) => {
                if(userRecord === null) {
                    res.status(400).json({message: "Invalid Login Attempt, Paisano."})
                } 
                else {
                    bcrypt.compare(req.body.password, userRecord.password)
                        .then( (isPasswordValid) => {
                            if(isPasswordValid) {
                                console.log("user.controller: Password is valid");
                                res.cookie(
                                    "userToken", 
                                    jwt.sign(
                                        {
                                        id: userRecord._id, 
                                        email: userRecord.email, 
                                        userName: userRecord.userName
                                        } , 
                                        process.env.JWT_SECRET
                                    ), 
                                    {
                                    httpOnly: true, 
                                    expires: new Date(Date.now() + 18000000) // this is in milliseconds; this value, 18000000, is 5 hours.   
                                    }
                                ).json ({
                                    message: "Login successful, nice job.", 
                                    userLoggedIn: userRecord.userName, 
                                    userId: userRecord._id // we're gonna comment this out later so this db value is not exposed
                                });
                            }
                            else {
                                res.status(400).json({message: "Invalid attempt, hombre."})
                            }
                        })
                        .catch( (err) => {
                            console.log(err); 
                            res.status(400).json({message: "Invalid attempt, dude."})
                        })
                    } 
            })
            .catch( (err) => {
                console.log(err); 
                res.status(400).json({message: "Invalid attempt, compadre."})
            })
    }, 

    logout: (req, res) => {
        console.log("user.controller: logging out"); 
        res.clearCookie('userToken');
        res.json({
            message: "You have successfully logged out.  Go in peace."
        }); 
    }, 

    getLoggedInUser: (req, res) => {

        // const decodedJWT = jwt.decode(req.cookies.usertoken, {complete: true}) //! this line replaced by jwt.config.js file

        // console.log("===>>>>>", req.jwtpayload)
        User
            // .findOne({_id: decodedJWT.payload.id})
            //! above replaced by below, per jwt note above
            .findOne({_id: req.jwtpayload.id})
            .then( (user) => {
                console.log(user); 
                res.json(user)
            })
            .catch ( (err) => {
                console.log(err);
            })
    }

}; 