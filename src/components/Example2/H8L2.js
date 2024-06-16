import { useContext } from "react"

import { ThemeContext, CountContext } from "./H8"

const H8L2 = () => {
    
    const value = useContext(ThemeContext)

    const countCtx = useContext(CountContext)

    return (
        <>
            <div>The theme is: {value} </div>
            <div> The count is: {countCtx.count}</div>
            <div><button onClick={() => {countCtx.setCount(countCtx.count + 1)}}>Count + 1</button></div>
        </>
    )
}

export default H8L2