const mongoose = require("mongoose"); 
const bcrypt = require("bcrypt"); 

const UserSchema = new mongoose.Schema({
    userName: {
      type: String
      , required: [true, "userName is required."]
    },
    email: {
      type: String
      , required: [true, "Email is required."]
      , validate: {
            validator: 
                val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
                message: "Please enter a valid email."
            },
    }, 
    password: {
      type: String
      , required: [true, "Password is required."]
      , minlength: [1, "Password must be 1 characters or longer."]
      }
    }
    , 
    {timestamps: true}
);

UserSchema.virtual('passwordConfirm')
  .get( () => this._passwordConfirm ).set( value => this._passwordConfirm = value ); 


UserSchema.pre('validate', function(next) {
  if (this.password !== this.passwordConfirm) {
    this.invalidate('passwordConfirm', 'Passwords must match.');
    // console.log("user.model: passwords do not match.") //!I dont' think this working. 
  }; 
  next();
});

UserSchema.pre('save', function(next) {
  console.log("user.model: begin pw hash."); 
  bcrypt
    .hash(this.password, 10)
    .then(hashedPassword => {
      this.password = hashedPassword;
      next();
    })
    console.log("user.model: pw hash complete."); 
    // .catch( (err) => {console.log("Holy cow, problems with hash/pw.")}); //! TW commented this line out at some point, not sure why.
});
  

  module.exports= mongoose.model('user', UserSchema); 
