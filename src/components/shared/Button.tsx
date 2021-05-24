import './Button.scss'

interface Props {
    text: string
    cssClass?: string
}

const Button: React.FC<Props> = ({text, cssClass=""}) => {
    return (
        <button className={"button" + cssClass} data-testid="button">
            <span>{text}</span>
        </button>
    )
}   

export default Button