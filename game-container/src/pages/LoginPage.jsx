import { useState } from 'react'
import { Textbox } from "../components/Textbox";
import Header from '../components/Header'
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';


function LoginPage() {
    const navigate = useNavigate();
    
    const goToHome = () => {
        navigate('/');
    };

    const { errorMessage, register, login } = useAuth()

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
    const handleSubmit = async () => {
        console.log('clicked')
        if (isLogin) {
            if (await login(email, password)) {
                navigate('/')
            }
        } else {
            if (await register(email, password)) {
                navigate('/')
            }
        }
    } 

    return (
        <div className = "justify-center min-h-screen min-w-screen bg-[#000000]/75">

            <Header
                buttons={['GameCatalog', 'Home']}
            />

            {/* Textboxes */}
            <div className="flex flex-col items-center justify-center pt-24">
                <main className="pt-24 px-8">
                    <h2 className="text-2xl font-semibold text-white mb-6">{isLogin ? 'Login:' : 'Create user:'}</h2>

                    <p className="text-white text-lg">Enter email</p>
                        <Textbox value={email} onChange={editEmail}/>

                    <p className="text-white text-lg">{isLogin ? 'Enter password:' : 'Create password:'}</p>
                    <Textbox value={password} onChange={editPassword}/>

                    <p className="text-white text-lg italic-text"> {errorMessage}</p>
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