// Performs register, login, logout, retrieve checkout actions
// Allows access to states currentUser and loggedIn for dashboard and game collection checkout process

// TODO: add a field of user status (student vs admin)

import {createContext, useState, useEffect} from "react";
import { databaseConstants } from "../constants/database.js";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(databaseConstants.supabaseURL, databaseConstants.supabaseKey)

export const AuthContext = createContext()

export function AuthProvider({children}) {
    const [errorMessage, setErrorMessage] = useState('')

    const register = async (email, password) => {
        console.log('Running registration')
        let { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        })
        console.log('Data: ', data)
        console.log('Error: ', error)

        var stringMessage = error.toString().split('Error: ')[1]
        setErrorMessage(stringMessage)

        createGameCheckout()
    }

    const login = async (email, password) => {
        console.log('Running login')
        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })

        console.log('Data: ', data)
        console.log('Error: ', error)

        var stringMessage = error.toString().split('Error: ')[1]
        setErrorMessage(stringMessage)
    }

    const recovery = async (email) => {
        console.log('Running password recovery')
        let { data, error } = await supabase.auth.resetPasswordForEmail(email)
    }

    const createGameCheckout = async () => {
        console.log('Creating game checkout for testing')
        const { data: { user } } = await supabase.auth.getUser()
        console.log(user.email)
        const { data, error } = await supabase
        .from('user_games')
        .insert([
            { email: user.email, games: [] },
        ])
        .select()

    }

    const logout = () => {
        let { error } = supabase.auth.signOut()
    }

    return (
        <AuthContext.Provider value={{ errorMessage, login, logout, register, createGameCheckout }}>
            {children}
        </AuthContext.Provider>
    )
}