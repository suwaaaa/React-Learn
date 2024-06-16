import {useState, useEffect } from "react"

const H3 = () => {

    const [count, setCount] = useState(0)

    const [c2, setC2] = useState(100)

    const onSubmit = () => {
        setCount(count + 1)
        console.log('[after]setcount = ' + count)
    }

    const handleC2 = () => {
        setC2(c2 + 1)
    }

    useEffect(() => {
        console.log('count = ' + count)
    }, [count])

    useEffect(() => {
        console.log('c2 = ' + c2)
    }, [c2])


    return (
        <>
        <div>
            <span>{count}</span>
        </div>

        <div>
            <button onClick={onSubmit}>改变</button>
        </div>
        <div onClick={handleC2}>
            {c2}
        </div>
        </>
    )
}

export default H3