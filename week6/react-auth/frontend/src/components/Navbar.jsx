import { Link } from "react-router-dom";
import { removeAuthToken } from "../utils/auth";
import { getAuthToken } from "../utils/auth";

function Navbar({ setIsAuthenticated, isAuthenticated }) {
  const user = getAuthToken();
  console.log(user);
  const handleClick = () => {
    // remove user from storage
    removeAuthToken();
    setIsAuthenticated(false);
  };

  return (
    <nav>
      {isAuthenticated && (
        <div>
          <span>Welcome {user.email}</span>
          <button onClick={handleClick}>Log out</button>
        </div>
      )}
      {!isAuthenticated && (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
