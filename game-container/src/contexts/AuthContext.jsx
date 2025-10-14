import {createContext, useState, useEffect} from "react";

export const AuthContext = createContext()

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loggedin, setLoggedin] = useState(false)
    
    // Gets currentUser and Login status locally
    // useEffect(() => {
    //     const savedUser = localStorage.getItem('currentUser')
    //     const token = localStorage.getItem('token')

    //     if (savedUser && token) {
    //         setCurrentUser(JSON.parse(savedUser))
    //         setLoggedin(true)
    //     }
    // }, [])

    // Posts user info to backend to create new user
    const register = async (email, password) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json()

            if (response.ok) {
                return { success: true, message: data.message };
            } else {
                return { success: false, message: data.message };
            }
        } catch (error) {
            return { success: false, message: 'Server error'}
        }
        }

    return (
        <AuthContext.Provider value={{ currentUser, loggedin, register }}>
            {children}
        </AuthContext.Provider>
    )
}