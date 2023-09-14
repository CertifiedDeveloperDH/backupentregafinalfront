import { useReducer } from "react"
import { apiContext } from "./apiContext.jsx"
import reducer from "../reducer/reducer.js"

const ApiContextProvider = ({children}) => {
    const [dentistas, dispatch] = useReducer(reducer, [])
    //const apiDentistas = () => dispatch({type: "fetchApi"})
    return (
        <apiContext.Provider value={{dentistas, dispatch}}>
            {children}
        </apiContext.Provider>
    )
}
export default ApiContextProvider