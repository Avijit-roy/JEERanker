import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
    phoneNumber: {
      // New field for phone number
      type: String,
      required: false, // Adjust as necessary
    },
    dateOfBirth: {
      // New field for date of birth
      type: Date,
      required: false, // Adjust as necessary
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
