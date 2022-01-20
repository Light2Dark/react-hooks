import { useState, useReducer } from "react"
import Button from "../components/button"

export default function Header() {
    const [count, setCount] = useState(0)

    return(
        <div>
            <h2 className="text-center text-2xl m-2 font-bold">React Hooks</h2>

            <div className="bg-white max-w-sm mx-auto p-4 rounded flex flex-col shadow-md"> 
                <div className="mb-1">
                    <h3 className="font-bold text-center">useState</h3>
                </div>
                <div className="flex flex-row items-center gap-4">
                    <div className="h-16 w-1/4 bg-red-400 rounded-md flex justify-center items-center">
                        <p className="font-bold">{count}</p>
                    </div>
                    <div>
                        <div className="flex flex-row gap-2">
                            <Button onClick = {() => setCount(count + 1)} buttonText="Counter" className="bg-violet-500 hover:bg-violet-600"/>
                            <Button onClick={() => setCount(0)} className="bg-sky-400 hover:bg-sky-500" buttonText="Reset"/>
                        </div>
                        <p className="text-slate-500">Click the counter!</p>
                    </div>

                </div>
            </div>
        </div>
    )
}