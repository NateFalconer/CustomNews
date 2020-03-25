const { Schema, model } = require("mongoose");
const mongoose = require('mongoose');

const articleSchema = new Schema(
  {
    title: String,
    email: String,
    author: String,
    description: String,
    // comment: String,
    url: String,
    userName: String,
    urlToImage: String,
    content: String,
    users: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Article", articleSchema);
