import { useReducer } from "react"
import {localstorageContext} from "./localstorageContext.jsx"
import reducer from "../reducer/reducer.js"

const LocalstorageContextProvider = ({children}) => {
    const [destacado, dispatch] = useReducer(reducer, "")
    const addFav = (destacado) => dispatch({type: "addFav", payload:destacado})
    return (
        <localstorageContext.Provider value={{destacado, addFav}}>
            {children}
        </localstorageContext.Provider>
    )
}
export default LocalstorageContextProvider