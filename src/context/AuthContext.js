import { createContext, useEffect, useReducer } from "react";
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
    currentUser: (() => {
        try {
            return JSON.parse(localStorage.getItem("user")) || null;
        } catch (error) {
            // Hata ile başa çıkın (örneğin, loglayın) ve bir varsayılan değeri döndürün.
            console.error("localStorage'dan kullanıcıyı çözme hatası:", error);
            return null;
        }
    })(),
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.currentUser));
    }, [state.currentUser, localStorage]);

    return (
        <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}