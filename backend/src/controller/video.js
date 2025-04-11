const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const VideoModel = require("../models/video");
const ChannelModel = require("../models/channel");
const UserModel = require("../models/registration");
const sendResponse = require("../utils/sendResponse");

// register Channel
exports.createVideo = catchAsyncErrors(async (req, res, next) => {
  const videoData = await VideoModel.create(req.body);

  await ChannelModel.findByIdAndUpdate(
    req.body.channel,
    { $push: { videos: videoData._id } },
    { new: true }
  );

  sendResponse(true, 201, "video", videoData, res);
});

// login video
exports.allChannelVideos = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const videos = await VideoModel.find({ channel: id });
  sendResponse(true, 200, "video", videos, res);
});

// all video
exports.allVideos = catchAsyncErrors(async (req, res, next) => {
  // const videosFind = await VideoModel.find();
  // for (let i = 0; i < videosFind.length; i++) {
  //   console.log(videosFind[i].thumbnail);
  //   if (!videosFind[i].thumbnail) {
  //     videosFind[i].thumbnail = "65c275eb5dbc808f0aaa709d.jpeg";
  //     videosFind[i].save();
  //   }
  // }

  const videos = await VideoModel.find()
    .populate("channel", "title")
    .sort({ createdAt: -1 });
  sendResponse(true, 200, "video", videos, res);
});

// logout video
exports.videoDetail = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const videoDetail = await VideoModel.findById(id);

  await VideoModel.findByIdAndUpdate(
    id,
    { $push: { view: res.user._id } },
    { new: true }
  );

  await UserModel.findByIdAndUpdate(
    res.user._id,
    { $push: { playedHistory: id } },
    { new: true }
  );

  sendResponse(true, 200, "videoDetail", videoDetail, res);
});

// DELETE video
exports.deleteVideo = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deletedvideo = await VideoModel.findByIdAndDelete(id);
  sendResponse(true, 200, "video", deletedvideo, res);
});

// Update video
exports.updateVideo = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.body;

  const updatedVideo = await VideoModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedVideo) {
    return next(new ErrorHandler(`Video with ID ${id} not found`, 404));
  }

  sendResponse(true, 200, "video", updatedVideo, res);
});

// Update BG
exports.uploadVideoFile = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.body;

  let bdy = req.body;
  bdy.video = bdy.upload;

  const updatedVideo = await VideoModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedVideo) {
    return next(new ErrorHandler(`Video with ID ${id} not found`, 404));
  }

  sendResponse(true, 200, "video", updatedVideo, res);
});

// Update BG
exports.uploadThumbnailFile = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.body;

  let bdy = req.body;
  bdy.thumbnail = bdy.upload;

  const updatedVideo = await VideoModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedVideo) {
    return next(new ErrorHandler(`Video with ID ${id} not found`, 404));
  }

  sendResponse(true, 200, "video", updatedVideo, res);
});

// Update BG
exports.likeVideo = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.body;
  const userID = res.user._id;

  // Check if the user has already liked the video
  const video = await VideoModel.findById(id);

  if (!video) {
    return next(new ErrorHandler(`Video with ID ${id} not found`, 404));
  }

  const isLiked = video.like.includes(userID);

  let updatedVideo;

  if (isLiked) {
    // If already liked, remove the like
    updatedVideo = await VideoModel.findByIdAndUpdate(
      id,
      { $pull: { like: userID } },
      { new: true }
    );

    await UserModel.findByIdAndUpdate(
      userID,
      { $pull: { likedVideos: id } },
      { new: true }
    );
  } else {
    // If not liked, add the like
    updatedVideo = await VideoModel.findByIdAndUpdate(
      id,
      { $push: { like: userID } },
      { new: true }
    );

    // If not liked, add the like
    await UserModel.findByIdAndUpdate(
      userID,
      { $push: { likedVideos: id } },
      { new: true }
    );
  }

  sendResponse(true, 200, "video", updatedVideo, res);
});
