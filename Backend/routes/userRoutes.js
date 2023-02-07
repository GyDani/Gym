const express = require("express");
const router = express.Router();
const { postUser } = "../controllers/userControllers";

router.get("/", () => require(postUser));
router.post("/", () => require(postUser));

module.exports = router;
