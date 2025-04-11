const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ChannelModel = require("../models/channel");
const UserModel = require("../models/registration");
const sendResponse = require("../utils/sendResponse");

// register Channel
exports.createChannel = catchAsyncErrors(async (req, res, next) => {
  let bdy = req.body;
  bdy.channelImage = bdy.upload;
  bdy.user = res.user._id;
  const channelData = await ChannelModel.create(req.body);

  const userId = res.user._id;
  await UserModel.findByIdAndUpdate(
    userId,
    { $push: { channel: channelData._id } },
    { new: true }
  );

  sendResponse(true, 201, "channel", channelData, res);
});

// login USER
exports.allChannels = catchAsyncErrors(async (req, res, next) => {
  let userId = res.user._id.toString();
  const channels = await ChannelModel.find({ user: userId });
  sendResponse(true, 200, "channel", channels, res);
});

// logout USER
exports.channelDetail = catchAsyncErrors(async (req, res, next) => {
  const channelDetail = await ChannelModel.findById(req.params.id);
  sendResponse(true, 200, "channelDetail", channelDetail, res);
});

// DELETE USER
exports.deleteChannel = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deletedUser = await ChannelModel.findByIdAndDelete(id);
  sendResponse(true, 200, "user", deletedUser, res);
});

// Update USER
exports.updateChannel = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const updatedChannel = await ChannelModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedChannel) {
    return next(new ErrorHandler(`Channel with ID ${id} not found`, 404));
  }

  sendResponse(true, 200, "channel", updatedChannel, res);
});

// Update BG
exports.updateChannelBG = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  let bdy = req.body;
  bdy.channelBG = bdy.upload;

  const updatedChannel = await ChannelModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedChannel) {
    return next(new ErrorHandler(`Channel with ID ${id} not found`, 404));
  }

  sendResponse(true, 200, "channel", updatedChannel, res);
});

// subscribe
exports.subscribe = catchAsyncErrors(async (req, res, next) => {
  const userId = res.user._id;
  const channelId = req.body.channel;

  const updatedChannel = await ChannelModel.findByIdAndUpdate(
    channelId,
    { $push: { subscribers: userId } },
    { new: true }
  );

  await UserModel.findByIdAndUpdate(
    userId,
    { $push: { subscribed: channelId } },
    { new: true }
  );

  sendResponse(true, 200, "channel", updatedChannel, res);
});
