import {useContext, useState} from 'react'
import { Textbox } from "../components/Textbox";
import { AuthContext } from '../contexts/AuthContext';

function LoginPage() {

    const { register, login, recovery } = useContext(AuthContext)

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
        <div>
            <h1>
            {isLogin ? 'Login:' : 'Create user:'}
            </h1>
            <div>
                <>Enter email:</>
                <Textbox value={email} onChange={editEmail}/>
            </div>
            <div>
                {isLogin ? 'Enter password:' : 'Create password:'}
                <Textbox value={password} onChange={editPassword}/>
            </div>
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={toggleLogin}>
                {isLogin? 'New user? Click here to register' : 'Have an account? Click here to login'}
            </button>
        </div>
    );
};

export default LoginPage