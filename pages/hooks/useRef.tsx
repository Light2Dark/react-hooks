import { useRef, useState } from "react"
import Button from "../../components/button"

const Ref = () => {
    // be as specific as possible when defining refs in ts
    const inputRef = useRef<HTMLInputElement>(null)

    const [output, setOutput] = useState("Alice Nova")

    const Click = () => {
        if (!inputRef.current) throw Error("divRef is not assigned");
        setOutput(inputRef.current.value)
        // inputRef.current.focus()
    }

    return(
        <>
            <div className="flex justify-evenly items-center">
                <div className="flex flex-col">
                    <label htmlFor="name" className="text-slate-500">Enter Name</label>
                    <input type="text" name="name" id="name" placeholder="John Smith" className="bg-slate-200 rounded-md p-1 w-3/4" ref={inputRef} />
                </div>
                <div>
                    <p className="italic from-neutral-200 text-md">{output}</p>
                </div>
            </div>
            <div className="mt-3 text-center">
                <Button buttonText="Change Name" colour="purple" onClick={Click} />
            </div>
        </>
    )
}

export default Ref