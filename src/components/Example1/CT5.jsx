import React from 'react'


class CT5 extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h3>计数器</h3>
                <div>当前count: {this.state.count}</div>
                <button onClick={this.handleClick}>add</button>
            </div>
        )
    }
}

export default CT5