import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function ForgotEmail() {
  const [email, setEmail] = useState("");
  const { forgotPassword, isLoading } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      // Store email in localStorage
      localStorage.setItem('resetEmail', email);
      toast.success("Password reset link sent to your email!");
      setEmail("");
      navigate("/password-notification", { state: { email } })
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Password reset link not sent. Please try again."
      );
    }
  };
  return (
    <div
      style={{ backgroundColor: "#9333ea" }}
      className="d-flex justify-content-center align-items-center min-vh-100 p-3"
    >
      <div className="card shadow-lg col-12 col-md-6 col-lg-4 p-4 text-center bg-white bg-opacity-75">
        <form className="card-body" onSubmit={handleSubmit}>
          <h3 className="card-title mb-3" style={{
            fontFamily: '"Poppins", sans-serif', fontWeight: "600",
            fontSize: "25px",
            textAlign: "center",
            marginBottom: "20px"
          }}>Enter Email</h3>
          <p className="card-text text-muted mb-4">
            Please enter your email address below and we&apos;ll send you a link to reset
            your password
          </p>
          <div className="input-group mb-4">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="input-group-text">
              <i className="fas fa-envelope" />
            </span>
          </div>
          <button className="btn btn-primary w-100 mb-3">{isLoading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Submit"
          )}</button>
          <button className="btn btn-outline-secondary w-100">Back to Login</button>
        </form>
      </div>
    </div>

  )
}

export default ForgotEmail