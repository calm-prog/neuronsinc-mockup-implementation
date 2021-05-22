import {useState} from 'react'
import './TextInput.scss'
import hidePassword from '../../icons/hide-password.svg'
import showPassword from '../../icons/show-password.svg'

interface Props {
    title: string,
    placeholder?: string,
    value: string,
    handleChange: (value: string) => void,
    img?: boolean
}

const Input: React.FC<Props> = ({title, placeholder, value, handleChange, img}) => {

    const [passwordVisibility, setPasswordVisibility] = useState<boolean>(false);

    const handleClick = () => {
        passwordVisibility 
        ? setPasswordVisibility(false) 
        : setPasswordVisibility(true)
    }

    return (
        <>
            <div className="input-title">{title}</div>
            <div className="input-container">
                <input className="input-field" 
                       value={value} placeholder={placeholder} 
                       onChange={(e) => handleChange(e.target.value)}
                       type={!passwordVisibility ? "password" : "text"}
                       />
                {img && <img className="password-visibility-icon" 
                             alt="password-visibility" 
                             src={passwordVisibility ? showPassword : hidePassword}
                             onClick={handleClick}
                             />}
            </div>
        </>
    )
}   

export default Input