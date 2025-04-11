const express = require("express");
const router = express.Router();

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  addVideoToPlaylist,
  allChannelPlaylists,
  createPlaylist,
  deletePlaylist,
  playlistDetail,
  updatePlaylist,
} = require("../controller/playlist");

// ROUTES
router.route("/").post(authentication, createPlaylist);

router.route("/channel-playlists/:id").get(authentication, allChannelPlaylists);

router
  .route("/:id")
  .get(authentication, playlistDetail)
  .delete(authentication, deletePlaylist)
  .put(authentication, updatePlaylist)
  .patch(authentication, addVideoToPlaylist);

module.exports = router;
