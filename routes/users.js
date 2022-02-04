const mongoose = require('mongoose');
const passport = require('passport');
const plm = require('passport-local-mongoose');

mongoose.connect('mongodb+srv://pratiknew:pratik@pratik.7m6lk.mongodb.net/facebook?retryWrites=true&w=majority');

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  tweets:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tweet'
  }]
});

userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema);

