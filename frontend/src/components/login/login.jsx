import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useAuthStore();
  const navigate = useNavigate(); // Hook to handle navigation

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      toast.success("Login successful!");
      navigate("/Dashboard");
      // Reset form fields
      setEmail("");
      setPassword("");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  };

  const styles = {
    body: {
      fontFamily: '"Poppins", sans-serif',
      backgroundColor: "#9333ea",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      margin: 0,
    },
    formGroupLabel: {
      fontWeight: 500,
      marginBottom: "0.5rem",
    },
    welcome: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: "600",
      fontSize: "30px",
      textAlign: "center",
      marginBottom: "20px",
    },
    loginCard: {
      fontFamily: '"Poppins", sans-serif',
      maxWidth: "450px",
      width: "100%",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      margin: "20px",
    },
    loginBtn: {
      fontSize: "16px",
      fontWeight: "bold",
      padding: "10px",
      width: "100%",
      border: "none",
    },
    formFooter: {
      fontFamily: '"Poppins", sans-serif',
      textAlign: "center",
      marginTop: "10px",
      fontSize: "0.9rem",
    },
    formFooterLink: {
      color: "#007bff",
      textDecoration: "underline",
      cursor: "pointer",
    },
    inputGroupText: {
      cursor: "pointer",
    },
    errorText: {
      color: "red",
      fontSize: "0.9rem",
      marginBottom: "10px",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.body}>
      <div style={styles.loginCard} className="fade show">
        <h3 className="text-center mb-4">
          <b style={styles.welcome}>Welcome back!</b>
        </h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              style={styles.formGroupLabel}
              htmlFor="email"
              className="form-label"
            >
              Email*
            </label>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="input-group-text">
                <i className="fas fa-envelope" />
              </span>
            </div>
          </div>

          {/* Password Field with Toggle Visibility */}
          <div className="mb-3">
            <label
              style={styles.formGroupLabel}
              htmlFor="password"
              className="form-label"
            >
              Password*
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                style={styles.inputGroupText}
                className="input-group-text"
                onClick={togglePasswordVisibility}
              >
                <i
                  className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                />
              </span>
            </div>
          </div>
          <Link to="/forgot-email">
            <div
              style={styles.formFooterLink}
              className="d-flex justify-content-between align-items-center mb-3"
            >
              <a href="#">Forgot your password?</a>
            </div>
          </Link>

          <button
            style={styles.loginBtn}
            type="submit"
            className="btn btn-primary mb-3"
          >
            {isLoading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Log in"
            )}
          </button>

          <Link to="/">
            <button type="button" className="btn btn-outline-secondary w-100">
              Back to Home
            </button>
          </Link>
        </form>

        {/* Footer Link */}
        <div style={styles.formFooter} className="form-footer mt-3">
          Not a member?{" "}
          <Link style={styles.formFooterLink} to="/signup">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
