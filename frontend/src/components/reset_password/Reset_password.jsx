import { validatePassword, useTogglePasswordVisibility } from "../../utils/ValidatePassword/validatePassword";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { useNavigate, useParams } from "react-router-dom";


function ResetPassword() {
  // Using custom hook for password visibility
  const { passwordVisible, confirmPasswordVisible, togglePasswordVisibility } = useTogglePasswordVisibility();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { resetPassword, isLoading } = useAuthStore();
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorMessage = validatePassword(password, confirmPassword);
    try {
      if (errorMessage) {
        toast.warn(errorMessage);
        return;
      }

      const storedEmail = localStorage.getItem('resetEmail');
      if (!storedEmail) {
        toast.error("Email not found. Please try the reset password process again.");
        navigate('/forgot-email');
        return;
      }

      await resetPassword(token, password, storedEmail);
      localStorage.removeItem('resetEmail'); // Clear the stored email after successful reset
      toast.success("Password reset successful!");
      setPassword("");
      setConfirmPassword("");
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to reset password");
    }
  };

  return (
    <div
      style={{ backgroundColor: "#9333EA" }}
      className="d-flex justify-content-center align-items-center min-vh-100 p-3"
    >
      <form className="card shadow-lg col-12 col-md-8 col-lg-6 col-xl-4 p-4 text-center bg-white bg-opacity-75" onSubmit={handleSubmit}>
        <div className="card-body">
          <h3 className="card-title mb-3" style={{
            fontFamily: '"Poppins", sans-serif', fontWeight: "600",
            fontSize: "25px",
            textAlign: "center",
            marginBottom: "20px"
          }}>Reset Password</h3>
          <p className="card-text mb-4">Enter the new password below</p>

          {/* New Password Input */}
          <div className="input-group mb-3">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              className="form-control"
              placeholder="New password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              style={{ cursor: "pointer" }}
              className="input-group-text"
              onClick={() => togglePasswordVisibility("password")}
            >
              <i className={`fas ${passwordVisible ? "fa-eye-slash" : "fa-eye"}`} />
            </span>
          </div>

          {/* Confirm Password Input */}
          <div className="input-group mb-4">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              className="form-control"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span
              style={{ cursor: "pointer" }}
              className="input-group-text"
              onClick={() => togglePasswordVisibility("confirmPassword")}
            >
              <i className={`fas ${confirmPasswordVisible ? "fa-eye-slash" : "fa-eye"}`} />
            </span>
          </div>

          <button className="btn btn-primary w-100 mb-3" type="submit">
            {isLoading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Submit"
            )}
          </button>
          <Link to="/login">
            <button type="button" className="btn btn-outline-secondary w-100">
              Back to Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ResetPassword;
