import {useState, useLayoutEffect, useEffect} from "react"

const H6 = () => {

    const [count, setCount] = useState(0)

    const onSubmit = () => {
        setCount(count + 1)
    }

    function delay(delayTime) {
        for(var start = new Date(); new Date() - start <= delayTime;) {}
    }

    useLayoutEffect(() => {
        // let i = 0
        // while(i <= 1000000000) {
        //     i++;
        // }
        delay(1000)
        console.log('useLayoutEffect...3')
    }, [count])

    useEffect(() => {

        console.log('useEffect...4')
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