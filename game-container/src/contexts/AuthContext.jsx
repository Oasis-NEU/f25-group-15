// Performs register, login, logout, retrieve checkout actions
// Allows access to states currentUser and loggedIn for dashboard and game collection checkout process

// TODO: add a field of user status (student vs admin)

import {createContext, useState, useEffect} from "react";

export const AuthContext = createContext()

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    

    useEffect(() => {
        const savedUser = localStorage.getItem('currentUser')

        if (savedUser) {
            setCurrentUser(JSON.parse(savedUser))
            setLoggedIn(true)
            console.log('Current user ', savedUser)
        } else {
            setLoggedIn(false)
        }
    }, [])


    const register = async (email, password) => {
        try {
            console.log("Attempting to register")
            const response = await fetch(`http://localhost:3001/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            console.log("Request sent")

            const data = await response.json()

            if (response.ok) {
                console.log("response: ", data.message)
                return { success: true, message: data.message };
            } else {
                console.log("response: ", data.message)
                return { success: false, message: data.message };
            }
        } catch (error) {
            console.log("Request failed, server error")
            return { success: false, message: 'Server error'}
        }
    }


    const login = async (email, password) => {
        try {
            console.log("Sending login request")
            const response = await fetch(`http://localhost:3001/login`, {
                method: 'POST',
                headers: { 'Content-Type': "application/json" },
                body: JSON.stringify({ email, password })
            });
            console.log("Request sent")

            const data = await response.json()

            if (data.success) {
                console.log("Login successsful")
                localStorage.setItem('currentUser', JSON.stringify(data.user))
                console.log('current user is: ', currentUser)
            } else {
                console.log("Login failure")
                return(<>Incorrect username or password</>)
            }
        } catch (error) {
            console.log("Request failed, server error")
            return { success: false, message: 'Server error'}
        }
    }


    const logout = () => {
        localStorage.setItem('currentUser', null)
        console.log('Local current user is now: ', localStorage.getItem('currentUser'))
    }


    const retrieveCheckout = async (email) => {

    }

    return (
        <AuthContext.Provider value={{ currentUser, loggedIn, login, logout, register, retrieveCheckout }}>
            {children}
        </AuthContext.Provider>
    )
}