import { useContext } from "react"

import { ThemeContext } from "./H8"

const H8L2X = () => {
    const value = useContext(ThemeContext)

    return (
        <>
            <div>The theme is: {value} </div>
        </>
    )
}

export default H8L2X