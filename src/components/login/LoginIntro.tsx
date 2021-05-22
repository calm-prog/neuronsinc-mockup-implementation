import './LoginIntro.scss'
import login from '../../login.svg'

const LoginIntro = () => {
    return (
        <div className="login-intro-container">
            <div className="login-intro">
                <div className="login-intro-heading">
                    Welcome back!<br/>
                    Nice to see you again, we hope<br/>
                    you are doing great
                </div>
                <img src={login} alt="login"/>
            </div>
        </div>
    )
}   

export default LoginIntro