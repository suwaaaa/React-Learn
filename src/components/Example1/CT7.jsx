import React from 'react'


class CT7 extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('count = ' + this.state.count)
        })
    }

    // handleClick 是一个箭头函数，它会在按钮点击时被调用。
    // 它通过 this.setState 方法更新组件的状态，将 count 的值增加 1。
    // this.setState 的第二个参数是一个回调函数，会在状态更新完成并重新渲染组件后执行。
    // 在这个回调函数中，使用 console.log 输出更新后的 count 值。
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

export default CT7