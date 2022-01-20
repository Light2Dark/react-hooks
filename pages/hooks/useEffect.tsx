import axios from "axios"
import { useEffect, useState } from "react"
import Button from "../../components/button"

const Joke = () => {
    const [joke, setJoke] = useState("Joke is being pulled...")
    const [updateJoke, setUpdateJoke] = useState(false)

    useEffect(() => {
        let apiSubscribed = true

        if(apiSubscribed) {
            axios
                .get("https://v2.jokeapi.dev/joke/Any?safe-mode&format=txt&lang=en&amount=1")
                .then((response) => {
                    setJoke(response.data)
                } )
                .catch((response) => {
                    console.error(response)
                })
        }

        return () => {
            // cleanup occurs when component unmounts / finishes basically
            apiSubscribed = false
        };
    }, [updateJoke]);
    

    return (
        <>
            <div className="flex flex-row justify-around items-center">
                <p className="w-3/5 italic">{joke}</p>
                <Button buttonText="New Joke" colour="purple" onClick={() => setUpdateJoke(!updateJoke)} />
            </div>
        </>
    )
}

export default Joke