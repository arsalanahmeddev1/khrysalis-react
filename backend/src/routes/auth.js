const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

// MIDDLEWARE
const { authentication } = require("../middleware/authentication");

// CONTROLLERS
const {
  register,
  login,
  logout,
  updateUser,
  deleteUser,
  allUsers,
  getUserData,
  forgotPassword,
  resetPassword,
} = require("../controller/auth");

// ROUTES
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/users").get(authentication, allUsers);
router
  .route("/user/:id")
  .patch(authentication, updateUser)
  .delete(authentication, deleteUser);
router
  .route("/password/forgot")
  .post(
    body("email").isEmail().withMessage("Please enter a valid email address"),
    forgotPassword
  );
router.route("/password/reset/:token").patch(resetPassword);

// AUTHENTICATED
router.route("/user-data").get(authentication, getUserData);
// AUTHENTICATED

module.exports = router;
