// Performs register, login, logout, retrieve checkout actions
// Allows access to states currentUser and loggedIn for dashboard and game collection checkout process

// TODO: add a field of user status (student vs admin)

import {createContext, useContext, useEffect} from "react";
import { supabase_client } from "../config/supabaseClient.js"

const supabase = supabase_client

export const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const register = async (user_email, user_password) => {
        console.log('Running registration')
        let { data, error } = await supabase.auth.signUp({
            email: user_email,
            password: user_password
        })
        console.log('Data: ', data)
        console.log('Error: ', error)
        createGameCheckout()
    }

    const login = async (user_email, user_password) => {
        console.log('Running login')
        let { data, error } = await supabase.auth.signInWithPassword({
            email: user_email,
            password: user_password
        })
        console.log('Data: ', data)
        console.log('Error: ', error)
        createGameCheckout()
    }

    const recovery = async (email) => {
        console.log('Running password recovery')
        let { data, error } = await supabase.auth.resetPasswordForEmail(email)
    }

    const createGameCheckout = async () => {
        console.log('Creating game checkout for testing')
        const { data: { user } } = await supabase.auth.getUser()
        console.log(user)
        const { data, error } = await supabase
        .from('user_games')
        .insert([
            { email: data.email, games: [] },
        ])
        .select()
    }

    const logout = () => {
        let { error } = supabase.auth.signOut()
    }

    return (
        <AuthContext.Provider value={{ login, logout, register, createGameCheckout }}>
            {children}
        </AuthContext.Provider>
    )
}