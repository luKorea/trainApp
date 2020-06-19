/**
 * @description Context 可以解决多层级组件中数据共享，提高用户的编程效率
 */

import React, { Component, createContext, useState } from "react";

const BaseContext: React.Context<number> = createContext(90);
const { Provider } = BaseContext;

// Context 的使用，必须在Consumer 中使用函数的形式获取Provider提供的值
class UseContext extends Component<any, any> {

  static contextType = BaseContext;

  render() {
    const context = this.context;
    return (<h1>{ context }</h1>)
  }
}

class Middle extends Component<any, any> {
  render() {
    return <UseContext />;
  }
}


export default function ContextDemo () {
  const [value, setValue] = useState<number>(60)
    return (
      <Provider value={value}>
        <Middle />
        <button onClick={ () => setValue(value + 1) }>累加</button>
      </Provider>
    )
}
