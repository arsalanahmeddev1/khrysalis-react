const mongoose = require("mongoose");
const { Schema } = mongoose;
const { ObjectId } = require("mongodb");

const channelSchema = new Schema({
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
  subscribers: [
    {
      type: ObjectId,
      ref: "users",
    },
  ],
  channelBG: {
    type: String,
    trim: true,
  },
  channelImage: {
    type: String,
    trim: true,
  },
  videos: [
    {
      type: ObjectId,
      ref: "video",
    },
  ],
  playlists: [
    {
      type: ObjectId,
      ref: "playlist",
    },
  ],
  user: {
    type: ObjectId,
    ref: "users",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ChannelModel = mongoose.model("channel", channelSchema);

module.exports = ChannelModel;
