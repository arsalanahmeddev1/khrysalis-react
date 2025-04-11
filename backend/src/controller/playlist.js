const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const PlaylistModel = require("../models/playlist");
const ChannelModel = require("../models/channel");
const sendResponse = require("../utils/sendResponse");

// register Channel
exports.createPlaylist = catchAsyncErrors(async (req, res, next) => {
  const playlistData = await PlaylistModel.create(req.body);

  await ChannelModel.findByIdAndUpdate(
    req.body.channel,
    { $push: { playlists: playlistData._id } },
    { new: true }
  );

  sendResponse(true, 201, "playlist", playlistData, res);
});

// playlist
exports.allChannelPlaylists = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const playlists = await PlaylistModel.find({ channel: id });
  sendResponse(true, 200, "playlist", playlists, res);
});

// detail playlist
exports.playlistDetail = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const playlistDetail = await PlaylistModel.findById(id).populate("videos");
  sendResponse(true, 200, "playlistDetail", playlistDetail, res);
});

// DELETE playlist
exports.deletePlaylist = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deletedplaylist = await PlaylistModel.findByIdAndDelete(id);
  sendResponse(true, 200, "playlist", deletedplaylist, res);
});

// Update playlist
exports.updatePlaylist = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const updatedPlaylist = await PlaylistModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedPlaylist) {
    return next(new ErrorHandler(`Playlist with ID ${id} not found`, 404));
  }

  sendResponse(true, 200, "playlist", updatedPlaylist, res);
});

// add video to a playlist
exports.addVideoToPlaylist = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  // Check if the video ID already exists in the playlist
  const playlist = await PlaylistModel.findById(id);
  if (!playlist) {
    return next(new ErrorHandler(`Playlist with ID ${id} not found`, 404));
  }

  if (playlist.videos.includes(req.body.video)) {
    return next(new ErrorHandler("Video already exists in the playlist", 400));
  }

  // Add the video to the playlist
  const updatedPlaylist = await PlaylistModel.findByIdAndUpdate(
    id,
    { $addToSet: { videos: req.body.video } },
    { new: true }
  );

  sendResponse(true, 200, "playlist", updatedPlaylist, res);
});
