import React from 'react'

const books = [{
    name: 'Java',
    price: 78.0
},{
    name: 'javascript',
    price: 109.0
}
]

class Book extends React.Component {
    
    handleSelect() {
        this.props.onSelect()
    }

    render() {
        return (
            <div>
                <h3>书名: {this.props.book.name}</h3>
                <p>售价: {this.props.book.price}</p>
                <button onClick={this.handleSelect.bind(this)}>选择</button>
            </div>
        )
    }
}

class CT9 extends React.Component {

    constructor() {
        super()
        this.state = {
            selected: false
        }
    }

    select() {
        this.setState({
            selected: !this.state.selected
        })
    }
    
    render() {
        return (
            <div style={{background: this.state.selected ? 'green': 'white'}}>
            {
                books.map((book) => 
                <Book key={book.name} onSelect={this.select.bind(this)} book={book} />
                )
            }
            </div>
        )
    }
    /**
     * 组件通信：Book 组件通过 props 接收 book 对象和 onSelect 回调函数。
     * 当用户点击 "选择" 按钮时，Book 组件调用 onSelect 函数，从而通知父组件 CT9。
        状态管理：CT9 组件管理一个 selected 状态，用于控制背景颜色的变化。
        select 方法通过 this.setState 更新 selected 状态。
        事件处理：在 Book 组件中，handleSelect 方法通过 bind 绑定 this 上下文，
        以确保在回调函数中正确引用 this。
     */
}

export default CT9