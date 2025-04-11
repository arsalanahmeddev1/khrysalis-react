const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = require("mongodb");

const playlistSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please enter Title"],
    trim: true,
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Please enter Description"],
    trim: true,
  },
  videos: [
    {
      type: ObjectId,
      ref: "video",
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

const PlaylistModel = mongoose.model("playlist", playlistSchema);

module.exports = PlaylistModel;
