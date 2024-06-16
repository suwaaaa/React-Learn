import useMyInput from "./H12MyInput"

const H12 = () => {

    let myInput = useMyInput('张三')
    return (
        <>
            <label>当前值: {myInput.value}</label><br/>
            <input {...myInput}/>
        </>
    )
}

export default H12