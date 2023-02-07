const mongoose = require("mongoose");

//név, edző,

const felhasznalokSchema = new mongoose.Schema(
  {
    nev: {
      type: String,
    },
    idopont: {
      type: Array,
    },
    edzo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "edzok",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", felhasznalokSchema);
