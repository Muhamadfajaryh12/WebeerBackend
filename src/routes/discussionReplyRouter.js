const express = require("express");
const router = express.Router();
const upload = require('multer')();
const {
    createReply,
    deleteReply,
    getDiscussionReply,
    updateReply,
} = require("../controller/discussionReplyController");
const asyncHandler = require("../utils/asyncHandler");
const verifyToken = require('../middleware/auth')
router.route("/:id").post(verifyToken,upload.any(), asyncHandler(createReply));
router.route("/:id").get(asyncHandler(getDiscussionReply));
router.route("/:id").put(asyncHandler(updateReply));
router.route("/:id").delete(verifyToken,asyncHandler(deleteReply));
module.exports = router;
