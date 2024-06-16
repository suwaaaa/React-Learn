import React, { useState } from "react";
import H8L1 from "./H8L1";

export const ThemeContext = React.createContext('light')
export const CountContext = React.createContext({
    count: 0
})

const H8 = () =>{

    const [count, setCount] = useState(0)

    const [name, setName] = useState('tom')

    const getChild = (params) => {
        console.log('received name from child: ' + params)
    }

        return (
            <>
            <div>{'root count = ' + count}</div>
            <ThemeContext.Provider value="dark">
                <CountContext.Provider value={{count, setCount}}>
                    <div>H8</div>
                    <H8L1 name={name} getChild={getChild} changeCount={setCount.bind(this)}/>
                </CountContext.Provider>
            </ThemeContext.Provider>
            </>
        )
}

export default H8
