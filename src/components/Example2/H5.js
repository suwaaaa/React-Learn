import {useState, useEffect } from "react"

const H5 = () => {

    const [count, setCount] = useState(0)

    let age = 20

    useEffect(() => {

        console.log('1.count = ' + count + ', age = ' + age)

        return () => {
            console.log('2.count = ' + count)
        }
    })

    const onChange = () => {
        setCount(count + 1)
        age = age + 1
        console.log('age = ' + age)
    }

    return (
        <>
        <div>
            <span>{count}</span>
            <button onClick={onChange}>Change</button>
        </div>
        <div>
            {age}
        </div>
        </>
    )
}

export default H5