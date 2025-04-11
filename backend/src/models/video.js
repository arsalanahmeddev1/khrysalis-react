const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = mongoose.Types;

const videoSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please enter Title"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please enter Description"],
    trim: true,
  },
  view: [
    {
      type: ObjectId,
      ref: "users",
    },
  ],
  video: {
    type: String,
    trim: true,
  },
  thumbnail: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    enum: [
      "All",
      "Trending",
      "Live",
      "Gaming",
      "Music",
      "Travel",
      "Sports",
      "Animation",
      "Game play",
      "Streaming",
      "Camping",
      "Cast",
    ],
    default: "All", // Standardwert (optional)
  },
  like: [
    {
      type: ObjectId,
      ref: "users",
    },
  ],
  comment: [
    {
      type: ObjectId,
      ref: "comment",
    },
  ],
  channel: {
    type: ObjectId,
    ref: "channel",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const VideoModel = mongoose.model("video", videoSchema);

module.exports = VideoModel;
