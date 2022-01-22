import { createContext, useContext, useState, useEffect } from "react"

interface Props {
    currentTheme?: string
    click?: () => void
    darkMode?: boolean
}

type Theme = "light" | "dark"
const ThemeContext = createContext<Theme>("dark")

const Context = () => {
    const [darkMode, setDarkMode] = useState(false)
    const [currentTheme, setCurrentTheme] = useState("Light") 

    const click = () => {
        setDarkMode(!darkMode)

        if (currentTheme === "Light") {
            setCurrentTheme("Dark")
        } else if (currentTheme === "Dark") {
            setCurrentTheme("Light")
        }
    }

    return(
        <>
            <ThemeContext.Provider value = "dark">
                <Stuff currentTheme={currentTheme} darkMode = {darkMode} click={click} />
            </ThemeContext.Provider>
        </>
    )
}

const Stuff = ({currentTheme, click, darkMode}: Props) => {
    const theme = useContext(ThemeContext)
    return(
        <div className={`${darkMode ? "dark" : ""}`}>
            <div className="dark:bg-slate-600 rounded-md transition-all">
                <div className="flex flex-row justify-center">
                    <button onClick={click} className="bg-slate-600 text-white px-2 py-1 rounded-sm mt-2 dark:bg-white dark:text-gray-800">{currentTheme}</button>
                </div>
                <p className="text-center mt-1 text-slate-600 dark:text-gray-200">Click the dark/light button</p>
            </div>
        </div>
    )
}

export default Context