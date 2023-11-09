import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../todo/api/RestTodoApiService";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [token, setToken] = useState(null);

  // HARD CODED AUTHENTICATION

  // function login(username, password){
  //     if(username === "Mohamed" && password ==="123") {
  //         setAuthenticated(true);
  //         setUsername(username)
  //         return true;
  //     } else {
  //         setAuthenticated(false);
  //         setUsername(null)
  //         return false;
  //     }
  // }

  // BASIC AUTHENTICATION.

  async function login(username, password) {
    const baToken = "Basic " + window.btoa(username + ":" + password);

    const response = await executeBasicAuthenticationService(baToken);
    try {
      if (response.status === 200) {
        setAuthenticated(true);
        setUsername(username);
        setToken(baToken);
        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
    setToken(null);
    setUsername(null);
  }

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, login, logout, username, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
