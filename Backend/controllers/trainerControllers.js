const Trainer = require("../models/edzok");

exports.postTrainer = async (req, res) => {
  const adatok = req.body;
  const newTrainer = new Trainer(adatok);
  await newTrainer.save();
  console.log(adatok);
  res.json({ msg: "Edzők feltöltése" });
};
