import { useState, useEffect, useCallback } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import LandingPage from "./components/landingPage/landingpage";
import SignupForm from "./components/signup/signup";
import LoginForm from "./components/login/login";
import VerifyEmail from "./components/verifyEmail/verifyEmail";
import Loader from "./components/loader/loader";
import { useAuthStore } from "./store/authStore";
import Dashboard from "./components/dashbord/dashbord"; // ✅ Fixed typo in import
import ChatPage from "./components/ChatPage/ChatPage"; // ✅ Fixed typo in import
import ForgotEmail from "./components/Forgot_email/forgot_email";
import PasswordNoti from "./components/passwordNotification/PasswordNoti";
import ResetPassword from "./components/reset_password/Reset_password";

// Protects authenticated pages
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user && !user.isVerified) {
    return <Navigate to="/verify-email" replace />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

// Redirects authenticated users away from login/signup
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated) {
    return user?.isVerified ? <Navigate to="/dashboard" replace /> : <Navigate to="/verify-email" replace />;
  }

  return children;
};

RedirectAuthenticatedUser.propTypes = {
  children: PropTypes.node.isRequired,
};

function App() {
  const { isCheckingAuth, checkAuth } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true);

  // Ensuring stable reference for `checkAuth`
  const checkAuthCallback = useCallback(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    checkAuthCallback();
  }, [checkAuthCallback]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading || isCheckingAuth) {
    return <Loader />;
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />

      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Protected Dashboard */}
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/engage-with-others" element={<ProtectedRoute><ChatPage /></ProtectedRoute>} />
        {/* Signup/Login */}
        <Route path="/signup" element={<RedirectAuthenticatedUser><SignupForm /></RedirectAuthenticatedUser>} />
        <Route path="/login" element={<RedirectAuthenticatedUser><LoginForm /></RedirectAuthenticatedUser>} />

        {/* Email Verification */}
        <Route path="/verify-email" element={<VerifyEmail />} />

        {/* Forgot Password & Reset */}
        <Route path="/forgot-email" element={<ForgotEmail />} />
        <Route path="/password-notification" element={<PasswordNoti />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
