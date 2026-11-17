

import React from "react";

function Signup() {
  const handleSignup = () => {
    window.location.href = "https://zerodha-clone-navy-ten.vercel.app/";
  };

  return (
    <div className="container text-center mt-5">
      <h1>Signup</h1>
      <p>Welcome! Your dashboard is ready.</p>

      <button
        className="btn btn-primary mt-3"
        onClick={handleSignup}
      >
        Continue to Dashboard
      </button>
    </div>
  );
}

export default Signup;
