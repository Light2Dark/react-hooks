import { useState} from "react"
import Button from "../components/button"
import Reducer from "./hooks/useReducer"
import Effect from "./hooks/useEffect"

interface Props {
    content: JSX.Element;
    name: string;
    divClass?: string;
}

const Card = ({name, content, divClass}: Props) => {
    return(
        <>
            <div className={`bg-white mx-auto p-4 rounded flex flex-col shadow-md mb-4 ${divClass}`}> 
                <div className="mb-1">
                    <h3 className="font-bold text-center">{name}</h3>
                </div>
                {content}
            </div>
        </>
    )
}

const StateHook = () => {
    const [count, setCount] = useState(0)
    // const [test, setTest] = useState<number | undefined>(undefined);
    // const [value, setValue] = useState<Array<number>>([]);

    return(
        <>
            <div className="flex flex-row items-center gap-4">
                    <div className="h-16 w-1/4 bg-red-400 rounded-md flex justify-center items-center">
                        <p className="font-bold">{count}</p>
                    </div>
                    <div>
                        <div className="flex flex-row gap-2">
                            <Button onClick = {() => setCount(count + 1)} buttonText="Counter" colour="purple"/>
                            <Button onClick={() => setCount(0)} colour="blue" buttonText="Reset"/>
                        </div>
                        <p className="text-slate-500">Click the counter!</p>
                    </div>
            </div>
        </>
    )
}

export default function Header() {

    return(
        <>
            <h2 className="text-center text-2xl m-2 font-bold">React Hooks</h2>

            <Card content={<StateHook />} name="useState" divClass="max-w-sm" />
            <Card content={<Reducer />} name="useReducer" divClass="max-w-md" />
            <Card content={<Effect />} name="useEffect" divClass="max-w-lg" />
        </>
    )
}