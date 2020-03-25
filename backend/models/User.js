const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    email: String,
    userName: String,
    favorites: [{type: mongoose.Schema.Types.ObjectId, ref: "Article"}],
    country: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
