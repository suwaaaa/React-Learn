import {useState, useLayoutEffect, useEffect} from "react"

const H6 = () => {

    const [count, setCount] = useState(0)


    const onSubmit = () => {
        setCount(count + 1)
        console.log('count = ' + count)
    }

    useLayoutEffect(() => {
        console.log('useLayoutEffect...1')
    }, [])

    useLayoutEffect(() => {
        console.log('useLayoutEffect...2')
    })

    useLayoutEffect(() => {
        console.log('useLayoutEffect...3')
        return () => {
            console.log('useLayoutEffect...3.1')
        }
    }, [count])

    useEffect(() => {
        console.log('useEffect...4')
        return () => {
            console.log('useEffect...4.1')
        }
    }, [count])

    return (
        <>
        <div>
            <span>{count}</span>
        </div>
        <div>
            <button onClick={onSubmit}>改变</button>
        </div>
        </>
    )
}

export default H6