import {useState, useEffect} from "react"

const H4 = () => {

    const [count, setCount] = useState(0)

    const [c2, setC2] = useState(100)

    const onSubmit = () => {
        setCount(count + 1)
        console.log('count = ' + count)
    }

    const handleC2 = () => {
        setC2(c2 + 1)
    }


    useEffect(() => {
        console.log('useEffect...DidMounted')
    }, [])

    useEffect(() => {
        console.log('useEffect...DidUpdated')
        // if (c2 < 200) {
        //     setC2(c2 + 1)
        // }
    })
    /**
     * 初始渲染
        constructor → getDerivedStateFromProps → render → componentDidMount
        更新渲染
        getDerivedStateFromProps → shouldComponentUpdate → render → getSnapshotBeforeUpdate → componentDidUpdate
        卸载
        componentWillUnmount
     */

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

export default H4