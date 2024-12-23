const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    event: {
      type: String,
      required: true,
      trim: true,
    },
    shortName: {
      type: String,
    },
  },
  { timestamps: true }
);

// Middleware to generate the shortName automatically
albumSchema.pre("save", function (next) {
  if (this.name && !this.shortName) {
    
    this.shortName = this.name
      .split(" ") 
      .map((word) => word[0].toUpperCase()) 
      .join("") 
      .slice(0, 3);
  }
  next();
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
