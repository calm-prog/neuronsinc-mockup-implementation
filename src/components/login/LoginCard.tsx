import './LoginCard.scss'
import {useState} from 'react'

import LoginIntro from './LoginIntro'
import LoginForm from './LoginForm'



const LoginCard = () => {
    const [playAnimation, setPlayAnimation] = useState<boolean>(false);

    return (
        <div className={"login-card-container" + (playAnimation ? " fade-in" : "")}
             onLoad={() => setPlayAnimation(true)}>
            <LoginIntro />
            <LoginForm />
        </div>
    )
}   

export default LoginCard