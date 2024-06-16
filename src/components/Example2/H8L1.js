import H8L2 from "./H8L2"

const H8L1 = (props) => {

    const changeName = () => {
        console.log('changeName')
        props.getChild('peter')
    }

    return (
        <>
        <div>H8L1</div>
        <div onClick={changeName}>{'H8L1, name = ' + props.name}</div>
        <div><button onClick={() => props.changeCount(100)}>Change Count in L1</button></div>
        <H8L2 />
        </>
    )
}

export default H8L1