import { useReducer, useEffect, useRef } from "react"
import Button from "../../components/button"

// dispatch is a special func that dispatches an action object, whenever you want to update the state, call the dispatch function with the action object: dispatch(actionObject)

// the reducer is a pure func that accepts 2 params (current state and action object). Depending on action object, reducer func must update state in immutable manner and return new state.

interface State {
    isRunning: boolean
    time: number
}

// initial state is value the state is initialized with
const initialState = {
    isRunning: false,
    time: 0
}

// action object is an object that describes how to update the state
// what actions the object/item should have
type Action = 
    | {type: "start"}
    | {type: "stop"}
    | {type: "reset"}
    | {type: "tick"}

const reducer = (state: State, action: Action) => {
    switch(action.type) {
        case "start":
            return {...state, isRunning: true}
        case "stop":
            return {...state, isRunning: false}
        case "reset":
            return {isRunning: false, time: 0}
        case "tick":
            return {...state, time: state.time + 1}
        default:
            throw new Error("action not defined properly")
    }
}

const Stopwatch = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const idRef = useRef(0)

    useEffect(() => {
      if(!state.isRunning) {
          return
      }
      idRef.current = Number(setInterval(() => dispatch({type: "tick"}), 1000))

      return () => {
        clearInterval(idRef.current)
        idRef.current = 0
      };
    }, [state.isRunning]);
    

    return(
        <div className="flex flex-row gap-4">
            <div>
                <div className="w-32 h-32 bg-blue-300 rounded-full flex flex-col justify-center">
                    <h3 className="text-center font-bold text-lg">{state.time}s</h3>
                </div>
                <p className="text-center">Stopwatch</p>
            </div>

            <div className="flex flex-col justify-center gap-1 items-center">
                <div className="flex flex-row gap-2">
                    <Button buttonText="Start" onClick={() => dispatch({type: "start"})} colour="purple" addClass="h-8 w-24"/>
                    <Button buttonText="Stop" onClick={() => dispatch({type: "stop"})} colour="blue" addClass="h-8 w-24"/>
                </div>
                <Button buttonText="Reset" onClick={() => dispatch({type: "reset"})} colour="orange" addClass="h-8 w-24"/>
                <p className="text-slate-500">Play with the stopwatch!</p>
            </div>
        </div>
    )
}

export default Stopwatch