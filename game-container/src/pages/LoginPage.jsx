import {useContext, useState} from 'react'
import { Textbox } from "../components/Textbox";
import { AuthContext } from '../contexts/AuthContext';

function LoginPage() {

    const { register } = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const editEmail = (e) => {
        setEmail(e.target.value)
    }
    const editPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleRegister = () => {
        register(email, password)
    }
    
    return (
        <div>
            <h1>
                <>Create user</>
            </h1>
            <div>
                <>Enter email:</>
                <Textbox value={email} onChange={editEmail}/>
            </div>
            <div>
                <>Create password:</>
                <Textbox value={password} onChange={editPassword}/>
            </div>
            <button onClick={handleRegister}>Submit</button>
            <p>
                {email}
                {password}
            </p>
        </div>
    );
};

export default LoginPage