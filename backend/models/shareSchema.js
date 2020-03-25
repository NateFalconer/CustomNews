const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const shareSchema = new Schema(
  {
    articleId: String,
    text: String,
    // comment: String,
    userName: String,
    userId: String,
    postId: String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

shareSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', shareSchema);