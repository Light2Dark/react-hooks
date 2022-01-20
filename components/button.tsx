interface Props {
    onClick: () => void;
    buttonText: string;
    colour: "blue" | "purple" | "orange";
    addClass?: string;
}

const Button = ({onClick, buttonText, colour, addClass}: Props) => {
    let colourClass
    switch (colour) {
        case "blue":
            colourClass = "bg-sky-400 hover:bg-sky-500"
            break
        case "purple":
            colourClass = "bg-violet-500 hover:bg-violet-600"
            break
        case "orange":
            colourClass = "bg-orange-400 hover:bg-orange-500"
            break
        default: 
            break;
    }

    return(
        <>
            <button onClick={onClick} className={`font-medium py-1 px-5 rounded-lg text-white h-8 ${colourClass} ${addClass}`} >{buttonText}</button>
        </>
    )
}

export default Button