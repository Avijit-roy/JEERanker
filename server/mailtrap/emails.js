import {
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplates.js";
import { transporter, sender } from "./mailtrapConfig.js";

// Function to send an email
const sendEmail = async (to, subject, html, category) => {
  try {
    const response = await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to,
      subject,
      html,
    });

    console.log(`${category} email sent successfully`, response);
    return response;
  } catch (error) {
    console.error(`Error sending ${category} email`, error);
    throw new Error(`Error sending ${category} email: ${error.message}`);
  }
};

// Send Verification Email
export const sendVerificationEmail = async (email, verificationToken) => {
  const html = VERIFICATION_EMAIL_TEMPLATE.replace(
    "{verificationCode}",
    verificationToken
  );
  return sendEmail(email, "Verify your email", html, "Email Verification");
};

// Send Welcome Email
export const sendWelcomeEmail = async (email, name) => {
  const html = WELCOME_EMAIL_TEMPLATE.replace("{userName}", name);
  return sendEmail(email, "Welcome to jeeRanker", html, "Welcome Email");
};

// Send Password Reset Request Email
export const sendPasswordResetEmail = async (email, resetURL) => {
  const html = PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL);
  return sendEmail(
    email,
    "Reset your password",
    html,
    "Password Reset Request"
  );
};

// Send Password Reset Success Email
export const sendResetSuccessEmail = async (email) => {
  const html = PASSWORD_RESET_SUCCESS_TEMPLATE;
  return sendEmail(
    email,
    "Password Reset Successful",
    html,
    "Password Reset Success"
  );
};
