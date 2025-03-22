import { useState } from "react";

export const validatePassword = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return "Passwords do not match";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  }

  if (!/[A-Z]/.test(password)) {
    return "Password must include at least one uppercase letter";
  }

  if (!/[a-z]/.test(password)) {
    return "Password must include at least one lowercase letter";
  }

  if (!/\d/.test(password)) {
    return "Password must include at least one number";
  }

  if (!/[@$!%*?&]/.test(password)) {
    return "Password must include at least one special character (@, $, !, %, *, ?, &)";
  }

  return null; // No errors
};

export const useTogglePasswordVisibility = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setPasswordVisible(!passwordVisible);
    } else if (field === "confirmPassword") {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };

  return { passwordVisible, confirmPasswordVisible, togglePasswordVisibility };
};