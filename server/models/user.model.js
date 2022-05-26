const mongoose = require("mongoose"); 
const bcrypt = require("bcrypt"); 

const UserSchema = new mongoose.Schema({
    username: {
      type: String
      , required: [true, "User name is required"]
    },
    email: {
      type: String
      , required: [true, "Email is required"]
      , validate: {
            validator: 
                val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email"
            },
    }, 
    password: {
      type: String
      , required: [true, "Password is required"]
      , minlength: [1, "Password must be 1 characters or longer"]
      }
    }
    , 
    {timestamps: true}
);

UserSchema.virtual('passwordConfirm')
  .get( () => this._passwordConfirm ).set( value => this._passwordConfirm = value ); 


UserSchema.pre('validate', function(next) {
  if (this.password !== this.passwordConfirm) {
    this.invalidate('passwordConfirm', 'Passwords must match, fool!');
    console.log("Passwords do not match.")
  }; 
  next();
});

UserSchema.pre('save', function(next) {
  console.log("In pre-save stage."); 
  bcrypt
    .hash(this.password, 10)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next();
    })
    // .catch( (err) => {console.log("Holy cow, problems with hash/pw.")}); //! TW commented this line out at some point, not sure why.
});
  

  module.exports= mongoose.model('user', UserSchema); 
