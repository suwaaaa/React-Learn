import { useRef } from 'react'

const H9 = () => {
    
    const myRef = useRef(null)

    const onSubmit = () => {
        console.log('myRef = ' + myRef.current)
        console.log('myRef = ' + myRef.current.value)
    }

    const onMyRefChange = (e) => {
        console.log('e.target.value' + e.target.value)
    }

    return (
        <>
            <input type="text" ref={myRef} value="tom" onChange={onMyRefChange}/>
            <button onClick={onSubmit}>取值</button>
        </>
    )
}

export default H9