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
      required: true, // Adjust as necessary
    },
    dateOfBirth: {
      // New field for date of birth
      type: Date,
      required: true, // Adjust as necessary
    },
    profilePicture: {
      // New field for profile picture
      type: String, // You can store the URL or file path
      default: "", // Default value if no picture is uploaded
      required: false, // Adjust as necessary
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
