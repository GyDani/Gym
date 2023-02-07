const express = require("express");
const router = express.Router();
const { postProgram } = "../controllers/programControllers";

router.post("/", () => require(postProgram));

module.exports = router;
