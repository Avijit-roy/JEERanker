import { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { toast } from "react-toastify";

const VerifyEmail = () => {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(Array(6).fill(""));
  const location = useLocation();
  const email = location.state?.email || ""; // Get email or default to empty string
  const { error, verifyEmail, isLoading } = useAuthStore();
  const navigate = useNavigate();

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
  };

  const handleInput = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text").trim();

    if (/^\d{6}$/.test(pastedText)) {
      const newOtp = pastedText.split("");
      setOtp(newOtp);

      newOtp.forEach((num, i) => {
        if (inputRefs.current[i]) {
          inputRefs.current[i].value = num;
        }
      });

      inputRefs.current[5].focus(); // Move focus to the last input
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const enteredOTP = otp.join("");
      console.log(enteredOTP);
      const code = enteredOTP;
      await verifyEmail(email, code);
      setOtp(Array(6).fill("")); // Reset the OTP
      console.log("Email verified successfully!");
      toast.success("Email verified successfully!");
      navigate("/Dashboard");
    } catch (error) {
      console.error("otp Error:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div
      style={styles.body}
      className="d-flex justify-content-center align-items-center vh-100"
    >
      <form onSubmit={handleSubmit}>
        <div
          className="card ml-auto mr-auto p-4 text-center shadow-lg"
          style={{
            maxWidth: "400px",
            width: "100%",
            background: "rgba(255, 255, 255, 0.8)",
          }}
        >
          <h3 className="fw-bold">Email Verify OTP</h3>
          <p className="mb-4">Enter the 6-digit code sent to your email id.</p>

          <div className="d-flex justify-content-center gap-2 mb-3">
            {otp.map((_, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                className="form-control text-center border-dark fw-bold"
                style={{ width: "45px", height: "45px", fontSize: "20px" }}
                ref={(el) => (inputRefs.current[index] = el)}
                value={otp[index]}
                onChange={(e) => handleInput(e, index)}
                onKeyDown={(e) => handleBackspace(e, index)}
                onPaste={index === 0 ? handlePaste : undefined} // Only allow pasting in the first input
                required
              />
            ))}
          </div>
          {error && <h6 className="text-danger">{error}</h6>}
          <button type="submit" className="btn btn-primary w-100 fw-bold">
            {isLoading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Verify Email"
            )}
          </button>
          <Link to="/login">
            <button
              type="button"
              className="btn btn-secondary w-100 fw-bold mt-2"
            >
              Back to Login
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default VerifyEmail;
