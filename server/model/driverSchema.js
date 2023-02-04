const mongoose = require("mongoose");

const driverSchema = new mongoose.Schema(
  {
    longitude: 
      {
        type: mongoose.Schema.Types.Decimal128,
      },
    latitude:
      {
        type: mongoose.Schema.Types.Decimal128,
      },
  },{ timestamps: true });

const Driver = mongoose.model("Driver", driverSchema);

module.exports = Driver;
