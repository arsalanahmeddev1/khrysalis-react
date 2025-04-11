const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

const commentSchema = new Schema({
  user: {
    type: ObjectId,
    ref: "users",
  },
  text: {
    type: String,
    required: true,
    trim: true,
  },
  like: [
    {
      type: ObjectId,
      ref: "users",
    },
  ],
  video: {
    type: ObjectId,
    ref: "video",
  },
  replies: {
    type: ObjectId,
    ref: "comment",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CommentModel = mongoose.model("comment", commentSchema);

module.exports = CommentModel;
