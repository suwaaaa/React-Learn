import React from 'react'


class CT6 extends React.Component {

    constructor() {
        super()
        this.state = {
            count: 0,
        }
    }

    handleClick = () => {
        this.setState((preState, props) => {
            return {
                count: preState.count + 1,
            }
        })
    }
    /**
     * 在 React 类组件中，this.setState 方法用于更新组件的状态。
     * this.setState 方法可以接受一个对象或一个函数作为参数。
     * 如果传递的是一个函数，这个函数会接收两个参数：preState 和 props。
     * 在这个函数中：
        preState 是一个对象，包含了组件的当前状态。因为 count 是我们状态中的唯一属性，
        所以 preState 是 { count: this.state.count }。
        通过 preState.count + 1，我们可以确保在增加 count 的值时，使用的是最新的状态值。

        props 参数
        props 代表组件当前的属性。尽管在这个示例中没有用到 props，但在需要访问组件的属性时，可以利用 props。
        例如，如果组件接受一个名为 increment 的属性，用来决定每次增加多少：
        handleClick = () => {
            this.setState((preState, props) => {
                return {
                    count: preState.count + props.increment,
                };
            });
        }
        在这个函数中：
        props 是一个对象，包含了组件的所有属性。比如，如果 <CT6 increment={2} />，
        那么 props 就是 { increment: 2 }。
        通过 preState.count + props.increment，
        我们可以根据 props 中的 increment 属性动态地增加 count 的值。
     */

    render() {
        return (
            <div>
                <h3>计数器(使用函数参数)</h3>
                <div>当前count: {this.state.count}</div>
                <button onClick={this.handleClick}>add</button>
            </div>
        )
    }
}

export default CT6