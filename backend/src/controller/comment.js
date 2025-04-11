const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const CommentModel = require("../models/comment");
const VideoModel = require("../models/video");
const sendResponse = require("../utils/sendResponse");

// register comment
exports.createComment = catchAsyncErrors(async (req, res, next) => {
  const commentData = await CommentModel.create(req.body);

  await VideoModel.findByIdAndUpdate(
    req.body.video,
    { $push: { comment: commentData._id } },
    { new: true }
  );

  sendResponse(true, 201, "comment", commentData, res);
});

// all comment
exports.allComments = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const comments = await CommentModel.find({ video: id })
    .populate("user")
    .sort({ createdAt: -1 });
  sendResponse(true, 200, "comment", comments, res);
});

// DELETE comment
exports.deleteComment = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const deletedcomment = await CommentModel.findByIdAndDelete(id);
  sendResponse(true, 200, "comment", deletedcomment, res);
});

// Update comment
exports.updateComment = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  const updatedComment = await CommentModel.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  sendResponse(true, 200, "comment", updatedComment, res);
});

// Update like
exports.likeComment = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.body;
  const userID = res.user._id;

  // Check if the user has already liked the comment
  const comment = await CommentModel.findById(id);

  if (!comment) {
    return next(new ErrorHandler(`Comment with ID ${id} not found`, 404));
  }

  const isLiked = comment.like.includes(userID);

  let updatedComment;

  if (isLiked) {
    // If already liked, remove the like
    updatedComment = await CommentModel.findByIdAndUpdate(
      id,
      { $pull: { like: userID } },
      { new: true }
    );
  } else {
    // If not liked, add the like
    updatedComment = await CommentModel.findByIdAndUpdate(
      id,
      { $push: { like: userID } },
      { new: true }
    );
  }

  sendResponse(true, 200, "comment", updatedComment, res);
});
