interface Props {
    onClick: () => void
    buttonText: string;
    className?: string;
}

const Button = ({onClick, buttonText, className}: Props) => {
    return(
        <>
            <button onClick={onClick} className={`font-medium py-1 px-5 rounded-lg text-white ${className}`} >{buttonText}</button>
        </>
    )
}

export default Button