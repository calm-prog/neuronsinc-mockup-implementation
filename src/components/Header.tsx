import './Header.scss'
import logo from '../icons/logo.svg'

const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={logo} alt="logo"></img>
        </header>
    )
}   

export default Header