import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setAuthToken } from "../utils/auth";

const SignupComponent = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    setError(""); // Clear previous errors

    try {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        setAuthToken(user);
        console.log("User signed up successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Signup failed");
        console.error("Signup failed:", errorData.error);
      }
    } catch (error) {
      setError("Network error occurred");
      console.error("Error during signup:", error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <div style={{ fontSize: '12px', color: 'gray', marginBottom: '10px' }}>
        Password must be at least 8 characters long and contain uppercase, lowercase, number, and symbol
      </div>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
