import './Header.scss'
import logo from '../icons/logo.svg'
import {useState} from 'react'

const Header = () => {
    const [playAnimation, setPlayAnimation] = useState<boolean>(false);

    return (
        <header className={"header" + (playAnimation ? " fade-in" : "")}
                onLoad={() => setPlayAnimation(true)}>
            <img className="logo" src={logo} alt="logo"></img>
        </header>
    )
}   

export default Header