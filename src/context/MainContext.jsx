import { createContext, useReducer } from "react";

export const mainContext = createContext()

const initialState = {
    theme: "dark",
    user: null
}

const reducer = (state, action) => {
    return state 
}

export default function MainContext({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState)

    return <mainContext.Provider value={{state, dispatch}}>
        {children}
    </mainContext.Provider>
}