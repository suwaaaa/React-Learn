import useCounter from './H11Counter'

const H11 = () => {

    const {count, increment} = useCounter()

    return (
        <>
        <div>Count: {count}</div>
        <button onClick={increment}>Add</button>
        </>
    )
}

export default H11