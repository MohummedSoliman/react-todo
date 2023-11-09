import { createContext, useContext, useState } from "react";
import { executeBasicAuthenticationService } from "../todo/api/RestTodoApiService";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);

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

  function login(username, password) {
    const baToken = "Basic " + window.btoa(username + ":" + password);

    executeBasicAuthenticationService(baToken)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    setAuthenticated(false);
    // if (username === "Mohamed" && password === "123") {
    //   setAuthenticated(true);
    //   setUsername(username);
    //   return true;
    // } else {
    //   setAuthenticated(false);
    //   setUsername(null);
    //   return false;
    // }
  }

  function logout() {
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
