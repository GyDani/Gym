const mongoose = require("mongoose");

const programSchema = new mongoose.Schema(
  {
    nev: {
      type: String,
    },
    ar: {
      type: Number,
    },
    gyakorlatok: {
      type: Array,
    },
    idotartam: {
      type: Number,
      min: 5,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("program", programSchema);
