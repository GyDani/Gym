const express = require("express");
const router = express.Router();
const { postTrainer } = "../controllers/trainerControllers";

router.post("/", () => require(postTrainer));

module.exports = router;
