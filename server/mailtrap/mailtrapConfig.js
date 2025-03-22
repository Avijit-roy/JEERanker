import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // Use 465 for secure (SSL) or 587 for STARTTLS
  secure: false, // Use `true` for port 465, `false` for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sender = {
  email: process.env.EMAIL_USER,
  name: "jeeRanker",
};
