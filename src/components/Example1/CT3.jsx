import React from 'react'

class CT3 extends React.Component {
    render() {
        return (
            <div>
                <div>{`书名: ${this.props.name}`}</div>
                <div>{ ` ${this.props.value}`}</div>
            </div>
        )
    }
}

export default CT3