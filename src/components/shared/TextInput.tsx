import {useState} from 'react'
import './TextInput.scss'
import hidePassword from '../../icons/hide-password.svg'
import showPassword from '../../icons/show-password.svg'

interface Error {
    email: boolean,
    password: boolean
}

interface Props {
    title: string,
    value: string,
    handleChange: (value: string) => void,
    error: Error,
    setError: React.Dispatch<React.SetStateAction<Error>>,
    errorText: string,
    placeholder?: string,
    hasIcon?: boolean,
}

const Input: React.FC<Props> = ({title, placeholder, value, handleChange, error, setError, errorText, hasIcon}) => {

    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);

    const handleClick = ():void => {
        passwordVisibility 
        ? setPasswordVisibility(false) 
        : setPasswordVisibility(true)
    }

    const handleFocus = ():void => {
        if(error && title==="Email"){
            setError({...error, email: false})
        } else if(error && title==="Password") {
            setError({...error, password: false})
        }
    }

    let errorVal = title ==="Email" ? error.email : error.password;
    return (
        <>
            <div className="input-title">{title}</div>
            <div className="input-container">
                <input className={"input-field" + (errorVal ? " error" : "")}
                       value={value} 
                       placeholder={placeholder} 
                       onChange={(e) => handleChange(e.target.value)}
                       onFocus={handleFocus}
                       type={!passwordVisibility && hasIcon ? "password" : "text"}
                       />
                <div className={"validation-error" + (errorVal ? " active" : "")}>{errorText}</div>
                {hasIcon && <img className="password-visibility-icon" 
                             alt="password-visibility" 
                             src={passwordVisibility ? showPassword : hidePassword}
                             onClick={handleClick}
                             />}
            </div>
        </>
    )
}   

export default Input