function PasswordNoti() {
  return (
    <div
      style={{ backgroundColor: "#9333EA" }}
      className="d-flex justify-content-center align-items-center min-vh-100 p-3"
    >
      <div className="card shadow-lg col-12 col-md-6 col-lg-4 p-4 text-center bg-white bg-opacity-75">
        <div className="card-body">
          <h3 className="card-title mb-3" style={{
            fontFamily: '"Poppins", sans-serif', fontWeight: "600",
            fontSize: "25px",
            textAlign: "center",
            marginBottom: "20px"
          }}>Forgot Password</h3>
          <i className="fas fa-envelope text-primary fs-1 mb-3" />
          <p className="card-text mb-4">
            If an account exists for email@gmail.com, you will receive a password
            reset link shortly.
          </p>
          <button className="btn btn-primary w-100">Back to Login</button>
        </div>
      </div>
    </div>
  )
}

export default PasswordNoti