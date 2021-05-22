import './LoginCard.scss'

import LoginIntro from './LoginIntro'
import LoginForm from './LoginForm'

const LoginCard = () => {
    return (
        <div className="login-card-container">
            <LoginIntro />
            <LoginForm />
        </div>
    )
}   

export default LoginCard