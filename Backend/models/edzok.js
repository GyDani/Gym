const mongoose = require("mongoose");

//név, edző,

const edzokSchema = new mongoose.Schema(
  {
    nev: {
      type: String,
    },
    idopont: {
      type: Array,
    },
    program: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "program",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("trainer", edzokSchema);
