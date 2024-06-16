import React, {useState} from "react"

const H1 = () => {

    const [count, setCount] = useState(0)
    let [name, setName] = useState('Tom')

    const onSubmit = () => {
        setCount(count + 1)
        setName('Jack' + count)
        console.log('count = ' + count)
    }

    const onChange = (e) => {
        setName(e.target.value)
    }

    return (
        <>
        <div>
            <span>{count}</span>
        </div>
        <div>
            <input placeholder="please input your name" value={name} onChange={e => onChange(e)}/>
        </div>
        <div>
            {name}
        </div>
        <div>
            <button onClick={onSubmit}>改变</button>
        </div>
        </>
    )
}

export default H1