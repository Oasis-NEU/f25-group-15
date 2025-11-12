import {useContext, useState} from 'react'
import { Textbox } from "../components/Textbox";
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const navigate = useNavigate();
    
    const goToHome = () => {
        navigate('/');
    };

    const { errorMessage, register, login } = useContext(AuthContext)

    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const editEmail = (e) => {
        setEmail(e.target.value)
    }
    const editPassword = (e) => {
        setPassword(e.target.value)
    }
    const toggleLogin = () => {
        setIsLogin(!isLogin)
    }
    const handleSubmit = () => {
        console.log('clicked')
        if (isLogin) {
            login(email, password)
        } else {
            register(email, password)
        }
    } 

    return ( //TODO: Better UI, this looks like shit
        <div className = "justify-center min-h-screen min-w-screen bg-[#000000]/75">

            {/* Header Bar */}
            <header className="w-full bg-[#C8102E]/85 shadow-md p-4 fixed top-0 left-0">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-gray-800">User Login</h1>
                    <button onClick={goToHome}>Home</button>
                </div>
            </header>

            {/* Textboxes */}
            <div className="flex flex-col items-center justify-center pt-24">
                <main className="pt-24 px-8">
                    <h2 className="text-2xl font-semibold text-white mb-6">{isLogin ? 'Login:' : 'Create user:'}</h2>

                    <p className="text-white text-lg">Enter email</p>
                        <Textbox value={email} onChange={editEmail}/>

                    <p className="text-white text-lg">{isLogin ? 'Enter password:' : 'Create password:'}</p>
                    <Textbox value={password} onChange={editPassword}/>

                    <p className="text-white text-lg italic-text">Error: {errorMessage}</p>
                    <div className="flex space-x-4 mt-6">
                        <button onClick={handleSubmit}>Submit</button>
                        <button onClick={toggleLogin}>
                            {isLogin? 'New user? Click here to register' : 'Have an account? Click here to login'}
                        </button>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default LoginPage