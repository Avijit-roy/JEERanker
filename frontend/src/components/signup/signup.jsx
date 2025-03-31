import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { toast } from "react-toastify";
import { validatePassword, useTogglePasswordVisibility } from "../../utils/ValidatePassword/validatePassword";

function SignupForm() {
  // State for toggling password visibility and more
  // Using the custom hook for password visibility
  const { passwordVisible, confirmPasswordVisible, togglePasswordVisibility } = useTogglePasswordVisibility();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const { signup, isLoading, error } = useAuthStore();
  const navigate = useNavigate(); // Hook to handle navigation

  // Toggle function for password fields

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(phone)) {
        toast.warn("Please enter a valid 10-digit Indian phone number starting with 6-9");
        return;
      }
      const errorMessage = validatePassword(password, confirmPassword);

      if (errorMessage) {
        toast.warn(errorMessage); // Show individual error in a warning toast
        return; // Stop submission
      }

      // Simulate signup (replace with actual authentication logic)
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm Password:", confirmPassword);
      console.log("Name:", name);
      console.log("Phone:", phone);
      console.log("DOB:", dob);

      // Call signup function (ensure it’s correctly defined elsewhere)
      const dateOfBirth = dob;
      const phoneNumber = phone;
      await signup(email, password, name, dateOfBirth, phoneNumber);
      // Reset form after successful signup
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setName(""); // Fixed typo (setName -> setName)
      setPhone("");
      setDob("");
      console.log("Signup successful!");
      navigate("/verify-email", { state: { email } });
    } catch (error) {
      console.error("Signup Error:", error.message);
      toast.error(error.message); // Show error message in a toast
    }
  };

  const styles = {
    body: {
      fontFamily: '"Poppins", sans-serif',
      backgroundColor: "#9333ea",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      margin: 0,
    },
    formGroup: {
      marginBottom: "1.5rem",
    },
    formGroupLabel: {
      fontWeight: 500,
      marginBottom: "0.5rem",
    },
    inputGroup: {
      position: "relative",
    },
    btnPrimary: {
      fontFamily: '"Poppins", sans-serif',
      fontSize: "16px",
      fontWeight: "bold",
      padding: "10px",
      width: "100%",
      border: "none",
    },
    h2: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: "600",
      fontSize: "30px",
      textAlign: "center",
      marginBottom: "20px",
    },
    h3: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: "600",
      fontSize: "20px",
      textAlign: "center",
      marginBottom: "20px",
    },
  };
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 576);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    padding: isMobile ? "20px" : "40px",
    maxWidth: "600px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    width: "100%",
    margin: "100px 20px 20px 20px",
  };
  return (
    <div style={styles.body}>
      <div style={containerStyle} className="form-container">
        <h2 style={styles.h2}>Register!</h2>
        <form onSubmit={handleSubmit}>
          {/* User Details */}
          <div className="row">
            <div className="col-md-6">
              <div style={styles.formGroup} className="form-group">
                <label style={styles.formGroupLabel} htmlFor="name">
                  User Name*
                </label>
                <div style={styles.inputGroup} className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter User Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div style={styles.formGroup} className="form-group">
                <label style={styles.formGroupLabel} htmlFor="email">
                  Email ID*
                </label>
                <div style={styles.inputGroup} className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <span className="input-group-text">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Password Fields */}
          <div className="row">
            <div className="col-md-6">
              <div style={styles.formGroup} className="form-group">
                <label style={styles.formGroupLabel} htmlFor="password">
                  Password*
                </label>
                <div style={styles.inputGroup} className="input-group">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="form-control"
                    id="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    style={{ cursor: "pointer" }}
                    className="input-group-text"
                    onClick={() => togglePasswordVisibility("password")}
                  >
                    <i
                      className={`fas ${passwordVisible ? "fa-eye-slash" : "fa-eye"
                        }`}
                    />
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div style={styles.formGroup} className="form-group">
                <label style={styles.formGroupLabel} htmlFor="confirmPassword">
                  Confirm Password*
                </label>
                <div style={styles.inputGroup} className="input-group">
                  <input
                    type={confirmPasswordVisible ? "text" : "password"}
                    className="form-control"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <span
                    style={{ cursor: "pointer" }}
                    className="input-group-text"
                    onClick={() => togglePasswordVisibility("confirmPassword")}
                  >
                    <i
                      className={`fas ${confirmPasswordVisible ? "fa-eye-slash" : "fa-eye"
                        }`}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <h3 style={styles.h3} className="mt-4 text-center mb-4">
            Personal Information
          </h3>
          <div className="row">
            <div className="col-md-6">
              <div style={styles.formGroup} className="form-group">
                <label style={styles.formGroupLabel} htmlFor="phone">
                  Phone Number*
                </label>
                <div style={styles.inputGroup} className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                  <span className="input-group-text">
                    <i className="fas fa-phone"></i>
                  </span>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div style={styles.formGroup} className="form-group">
                <label style={styles.formGroupLabel} htmlFor="dob">
                  Date of Birth*
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
          {error && <h6 className="text-danger">{error}</h6>}
          {/* Submit Button */}
          <button
            style={styles.btnPrimary}
            type="submit"
            className="btn btn-primary mt-3"
          >
            {isLoading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Sign Up"
            )}
          </button>

          {/* Redirect to Login */}
          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#007bff" }}>
              <u>Login</u>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
