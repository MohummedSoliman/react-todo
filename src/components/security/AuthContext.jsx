import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }){

    const [ isAuthenticated, setAuthenticated ] = useState(false);

    return (
        <AuthContext.Provider value={ { isAuthenticated, setAuthenticated } }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider