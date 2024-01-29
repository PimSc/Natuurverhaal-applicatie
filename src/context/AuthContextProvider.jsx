import { createContext, useState, useEffect } from "react";
import AuthService from "../services/auth.service";
import TokenService from "../services/token.service";




export const AuthContextData = createContext(null);

function AuthContextProvider({children}) {
    // const [isAuth, setAuthenticated] = useState(false);
    const [session, setSession] = useState(null);

    const context = {
        isAuthenticated: !!session,
        userRoles: (session?.roles ?? []),
        session,
        logout,
        login
    };

    useEffect(() => {
        const localUser = TokenService.getUser()
        if (localUser) {
            setSession(localUser)
        }
    }, []);

    function logout() {
        AuthService.logout()
        setSession(null)
    }

    function login(username, password) {
        AuthService.login(username, password).then(
            (data) => {
                if (!data || !data?.accessToken) {
                    return
                }
                setSession(data)
            },
            error => {
                console.error(error)
            });
    }

    return (
        <AuthContextData.Provider value={context}>
            {children}
        </AuthContextData.Provider>
    )
}
export default AuthContextProvider;