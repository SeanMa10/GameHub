const express = require("express");
const {
  registerUser,
  loginUser,
  getProtectedData,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware.js");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/protected", protect, getProtectedData);

module.exports = router;
