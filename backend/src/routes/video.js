const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  createVideo,
  allVideos,
  videoDetail,
  deleteVideo,
  updateVideo,
  uploadThumbnailFile,
  uploadVideoFile,
  likeVideo,
  allChannelVideos,
} = require("../controller/video");

// ROUTES
router
  .route("/")
  .get(allVideos)
  // .get(authentication, allVideos)
  .post(authentication, createVideo);

router.route("/channel-videos/:id").get(authentication, allChannelVideos);

router
  .route("/single-video/:id")
  .get(authentication, videoDetail)
  .put(authentication, updateVideo)
  .delete(authentication, deleteVideo);

router
  .route("/video-file")
  .patch(authentication, upload.single("video"), uploadVideoFile);

router
  .route("/thumbnail")
  .patch(authentication, upload.single("thumbnail"), uploadThumbnailFile);

router.route("/like").post(authentication, likeVideo);

module.exports = router;
