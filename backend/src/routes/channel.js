const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  createChannel,
  allChannels,
  channelDetail,
  deleteChannel,
  updateChannel,
  updateChannelBG,
  subscribe,
} = require("../controller/channel");

// ROUTES
router
  .route("/")
  .get(authentication, allChannels)
  .post(authentication, upload.single("channelImage"), createChannel);

router
  .route("/:id")
  .get(authentication, channelDetail)
  .delete(authentication, deleteChannel)
  .put(authentication, upload.single("channelImage"), updateChannel)
  .patch(authentication, upload.single("channelBG"), updateChannelBG);

router.route("/subscribe").post(authentication, subscribe);

module.exports = router;
