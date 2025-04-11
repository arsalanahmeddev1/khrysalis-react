const express = require("express");
const router = express.Router();

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  allComments,
  createComment,
  deleteComment,
  likeComment,
  updateComment,
} = require("../controller/comment");

// ROUTES
router.route("/").post(authentication, createComment);

router.route("/video-comments/:id").get(authentication, allComments);

router
  .route("/single-comment/:id")
  .put(authentication, updateComment)
  .delete(authentication, deleteComment);

router.route("/like").post(authentication, likeComment);

module.exports = router;
