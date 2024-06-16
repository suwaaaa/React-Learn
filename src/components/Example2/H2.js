import {useState} from 'react'

const H2 = () => {

    const [person, setPerson] = useState({
        name: 'tom',
        age: 20
    })

    const onChange = () => {
 
        const net = {
            age: 100,
            address: '新地址'
        }

        person.age = net.age

        console.log('new age = ' + person.age)

        setPerson({
            // name: person.name,
            // age: net.age
            ...person,
            ...net
        })
    }

    return (
        <>
        <div>{person.name} - {person.age}</div>
        <div>
            <button onClick={onChange}>Change</button>
        </div>
        </>
    )

}

export default H2