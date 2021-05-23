import './LoginForm.scss'
import TextInput from '../shared/TextInput'
import {useState} from 'react'
import Button from '../shared/Button';

interface ValidationError {
    email: boolean,
    password: boolean
}

const LoginForm = () => {
    const [emailVal, setEmailVal] = useState<string>("");
    const [passwordVal, setPasswordVal] = useState<string>("");
    const [rememberDetails, setRememberDetails] = useState<boolean>(false);
    const [validationError, setValidationError] = useState<ValidationError>({email: false, password: false});

    const handleSubmit = (e:any):void => {
        e.preventDefault();

        const emailRegex = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        let email:boolean;
        let password:boolean;

        !emailVal.length || !emailRegex.test(emailVal)
            ? email = true
            : email = false;
        
        !passwordVal.length 
            ? password = true
            : password = false;
        
        email || password 
            ? setValidationError({email: email, password: password})
            : console.log("ready for backend validation")
    }

    return (
        <div className="login-form-container">
            <form className="login-form"
                  onSubmit={handleSubmit}>
                <div className="login-form-content">
                    <div className="login-form-heading">User <span>login</span></div>
                    <div className="spacer"></div>
                    <TextInput
                        title="Email"
                        placeholder="Jane@company.com"
                        value={emailVal}
                        handleChange={setEmailVal}
                        errorText="Please, enter the email address that you used at the registration"
                        error={validationError}
                        setError={setValidationError}
                    />
                    <TextInput 
                        title="Password"
                        value={passwordVal}
                        handleChange={setPasswordVal}
                        hasIcon={true}
                        errorText="Please, enter your password"
                        error={validationError}
                        setError={setValidationError}
                    />
                    <div className="login-assistance">
                        <div className="radio-button">
                            <input type="radio" 
                                   name="save-details" 
                                   checked={rememberDetails} 
                                   onChange={() => setRememberDetails(true)}
                                   id="save-details"
                                   />
                            <label htmlFor="save-details">Remember me?</label>
                        </div>
                        <div className="forgot-password">Forgot password?</div>
                    </div>
                    <Button cssClass=" login-form-button" 
                            text="Login"/>
                </div>
            </form>
        </div>
    )
}   

export default LoginForm