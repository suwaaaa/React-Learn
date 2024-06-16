import React from 'react'


class CT8 extends React.Component{

    constructor() {
        super()
        console.log('constructor.')
        this.state = {
            name: '开始'
        }
    }

    componentDidMount() {
        console.log('DidMount.')
    }

    componentWillUnmount() {
        console.log('WillUnmount.')
    }

    componentDidUpdate() {
        console.log('DidUpdate')
    }

    /**
     * 构造函数：初始化状态并输出日志信息。
        componentDidMount：组件挂载到 DOM 后调用，通常用于执行副作用操作。
        componentWillUnmount：组件从 DOM 卸载前调用，通常用于清理操作。
        componentDidUpdate：组件更新后调用，通常用于在更新后执行操作。
        render：定义组件的 UI 结构。
     * 
     */

    render() {
        return (
            <div>
                <h3>React Component生命周期演示</h3>
            </div>
        )
    }
}

export default CT8