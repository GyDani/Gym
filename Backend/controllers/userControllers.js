const User = require("../models/edzok");
const Trainer = require("../models/Trainer");

exports.getUser = async (req, res) => {
  try {
    const spori = await User.findOne({ nev: "spori" });
    console.log(spori.edzo);
    const edzo = await Trainer.findById(spori.edzo);
    console.log(edzo);
    res.json({
      /*vmi*/ spori: spori.nev,
    });
  } catch {
    res.json({ msg: error.message });
  }
};

exports.postuser = async (req, res) => {
  try {
    const adatok = req.body;
    const newUser = new User(adatok);
    await newUser.save();
    console.log(adatok);
    res.json({ msg: "Sportolni vágyók feltöltése" });
  } catch {
    res.json({ msg: error.message });
  }
};
