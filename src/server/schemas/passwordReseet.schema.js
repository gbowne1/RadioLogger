const mongoose = require("mongoose");

const passwordResetSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    resetToken: {
      type: String,
      required: true,
    },
    expirationTime: {
      type: Date,
      required: true,
    },
    used: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

const PasswordReset = mongoose.model("PasswordReset", passwordResetSchema);

module.exports = PasswordReset;
